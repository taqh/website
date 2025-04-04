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
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = (await params).slug;

  const data = await getSinglePost(slug);
  if (!data || !data.post) return {};

  return {
    metadataBase: new URL(SITE.url),
    title: `${data.post.title} - Rivo Blog`,
    description: data.post.description,
    twitter: {
      title:`${data.post.title} - Rivo Blog`,
      description: `${data.post.description || SITE.description}`,
      card: 'summary_large_image',
      site: `${SITE.url}/${slug}`,
      images: [
        {
          url: data.post.coverImage,
          width: '1200',
          height: '630',
          alt: `${data.post.title} - Rivo Blog`,
        },
      ],
    },
    openGraph: {
      type: 'article',
      siteName: '',
      images: [
        {
          url: data.post.coverImage,
          width: '1200',
          height: '630',
          alt: `${data.post.title} - Rivo Blog`,
        },
      ],
      title: `${data.post.title} - Rivo Blog`,
      description: data.post.description,
      publishedTime: new Date(data.post.publishedAt).toISOString(),
      authors: data.post.authors.map((author) => author.name),
    },
  };
}

export async function generateStaticParams() {
  const data = await getPosts();
  if (!data || !data.posts.length) return [];

  return data.posts.map((post) => ({
    slug: post.slug,
  }));
}

async function Page({ params }: PageProps) {
  const slug = (await params).slug;
  const data = await getSinglePost(slug);
  if (!data || !data.post) return notFound();

  const formattedDate = new Date(data.post.publishedAt).toLocaleDateString(
    'en-US',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  );

  const [toc, html] = await Promise.all([
    generateTableOfContents(data.post.content),
    processHtmlContent(data.post.content),
  ]);

  return (
    <BlogContainer className='pt-10 pb-28'>
      <section className='space-y-6 lg:space-y-8'>
        <div className='relative w-full'>
          <Image
            src={data.post.coverImage}
            alt={data.post.title}
            width={1920}
            height={1080}
            className='object-cover size-full max-sm:max-h-[365px]'
          />
        </div>
        <div className='flex flex-col items-center gap-4'>
          <time
            dateTime={data.post.publishedAt.toString()}
            className='text-muted-foreground'
          >
            {formattedDate}
          </time>
          <h1 className='text-3xl lg:text-4xl font-semibold text-center text-foreground'>
            {data.post.title}
          </h1>
          <div className='flex items-center gap-2'>
            <Image
              src={data.post.authors[0].image}
              alt={data.post.authors[0].name}
              width={36}
              height={36}
              loading='eager'
              className='aspect-square shrink-0 size-8 rounded-full'
            />
            <p className='text-muted-foreground'>{data.post.authors[0].name}</p>
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
