import BlogContainer from '@/components/blog-container';
import Prose from '@/components/prose';
import TableOfContents from '@/components/toc';
import {
  generateTableOfContents,
  getPosts,
  getSinglePost,
  processHtmlContent,
} from '@/lib/blog';
import { SITE } from '@/lib/seo';
import type { Post } from '@/types/blog';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const url = process.env.MARBLE_API_URL;
  const key = process.env.MARBLE_WORKSPACE_KEY;

  const slug = (await params).slug;

  const post: Post = await fetch(`${url}/${key}/posts/${slug}`).then((res) =>
    res.json()
  );

  const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL(SITE.url),
    title: post.title,
    description: post.description,
    twitter: {
      title: `${post.title}`,
      description: `${post.description || SITE.description}`,
      card: 'summary_large_image',
      site: `${SITE.url}/${slug}`,
      images: [
        {
          url: post.coverImage,
          width: '1200',
          height: '630',
          alt: post.title,
        },
        ...previousImages,
      ],
    },
    openGraph: {
      type: 'article',
      siteName: '',
      images: [
        {
          url: post.coverImage,
          width: '1200',
          height: '630',
          alt: post.title,
        },
        ...previousImages,
      ],
      title: post.title,
      description: post.description,
      publishedTime: new Date(post.publishedAt).toISOString(),
      authors: post.authors.map((author) => author.name),
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  if (!posts) return [];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function Page({ params }: PageProps) {
  const slug = (await params).slug;
  const data = await getSinglePost(slug);
  if (!data) return notFound();

  const toc = await generateTableOfContents(data.content);
  const html = await processHtmlContent(data.content);

  const formattedDate = new Date(data.publishedAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <BlogContainer className='pt-10 pb-28'>
      <section className='space-y-6 lg:space-y-8'>
        <div className='relative w-full'>
          <Image
            src={data.coverImage}
            alt={data.title}
            width={1920}
            height={1080}
            className='object-cover size-full max-sm:max-h-[365px]'
          />
        </div>
        <div className='flex flex-col items-center gap-4'>
          <time
            dateTime={data.publishedAt.toString()}
            className='text-muted-foreground'
          >
            {formattedDate}
          </time>
          <h1 className='text-3xl lg:text-4xl text-center text-foreground'>
            {data.title}
          </h1>
          <div className='flex items-center gap-2'>
            <Image
              src={data.authors[0].image}
              alt={data.authors[0].name}
              width={36}
              height={36}
              loading='eager'
              className='aspect-square shrink-0 size-8 rounded-full'
            />
            <p className='text-muted-foreground'>{data.authors[0].name}</p>
          </div>
        </div>
      </section>
      <section className='mt-14 border-t pt-10 flex flex-col lg:flex-row gap-4 lg:gap-8'>
        <aside className='lg:order-2'>
          <TableOfContents toc={toc} />
        </aside>
        <div className='lg:order-1 flex-1'>
          <Prose html={html} />
        </div>
      </section>
    </BlogContainer>
  );
}

export default Page;
