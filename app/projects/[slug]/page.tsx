import { promises as fs } from 'node:fs';
import path from 'node:path';
import { ImageWrapper } from '@/components/projects/elements';
import type { Metadata, Viewport } from 'next';
import { compileMDX } from 'next-mdx-remote/rsc';
import ImageGrid from '@/components/projects/image-grid';
import SteamWishlistButton from '@/components/projects/steam-wishlist-button';
import ImageCarousel from '@/components/projects/image-carousel';
import { Schema } from '@/components/Schema';
import ProjectContainer from '@/components/project-container';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import type { Frontmatter } from '@/types/projects';

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const slug = (await params).slug;

  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { frontmatter } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
    },
  });

  const title = frontmatter.title;
  const description = frontmatter.description;
  const image = frontmatter.image;

  return {
    metadataBase: new URL('https://rivo.gg'),
    title: `${title} - Rivo Projects`,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const viewport: Viewport = {
  maximumScale: 5,
  themeColor: '#0598f4',
};

export default async function ProjectPage({ params }: PageProps) {
  const slug = (await params).slug;
  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);
  const fileContent = await fs.readFile(filePath, 'utf-8');

  const data = await compileMDX<Frontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: {
      ImageWrapper,
      ImageGrid,
      SteamWishlistButton,
      ImageCarousel,
    },
  });

  return (
    <>
      {data.frontmatter.schema && <Schema json={data.frontmatter.schema} />}
      <ProjectContainer className='space-y-5'>
        <Link
          href='/projects'
          className={cn(
            buttonVariants({
              variant: 'ghost',
            }),
            'group flex w-fit'
          )}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='size-5 fill-none stroke-current stroke-2 rotate-180'
          >
            <title>Go back to projects</title>
            <line
              x1='5'
              y1='12'
              x2='19'
              y2='12'
              className='translate-x-3 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100'
            />
            <polyline
              points='12 5 19 12 12 19'
              className='-translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0'
            />
          </svg>
          <span>Go back</span>
        </Link>
        <article className='prose max-w-none dark:prose-invert prose-h1:text-primary prose-h1:font-semibold prose-p:text-foreground prose-li:text-foreground'>
          {data.content}
        </article>
      </ProjectContainer>
    </>
  );
}
