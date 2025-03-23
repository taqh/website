import type { Post, Tag } from '@/types/blog';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeToc from 'rehype-toc';

const url = process.env.MARBLE_API_URL;
const key = process.env.MARBLE_WORKSPACE_KEY;

export async function getPosts() {
  try {
    const raw = await fetch(`${url}/${key}/posts`);
    const data: Post[] = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTags() {
  try {
    const raw = await fetch(`${url}/${key}/tags`);
    const data: Tag[] = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getSinglePost(slug: string) {
  try {
    const raw = await fetch(`${url}/${key}/posts/${slug}`);
    const data: Post = await raw.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function calculateReadTime(content: string) {
  const wordsPerMinute = 200;
  const plainText = content.replace(/<[^>]*>/g, '').trim();
  const wordCount = plainText.split(/\s+/).length;

  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
}

/**
 * Process HTML content with slug IDs and autolink headings only
 */
export async function processHtmlContent(html: string): Promise<string> {
  const processor = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'append' })
    .use(rehypeStringify);

  const file = await processor.process(html);
  return String(file);
}

/**
 * Generate only the table of contents from HTML
 */
export async function generateTableOfContents(html: string): Promise<string> {
  const processor = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSlug)
    .use(rehypeToc, {
      headings: ['h1', 'h2', 'h3', 'h4'],
      nav: true,
      cssClasses: {
        toc: 'blog-toc',
        list: 'blog-toc-list',
        listItem: 'blog-toc-item',
        link: 'blog-toc-link hover:underline transition text-muted-foreground',
      },
    })
    .use(rehypeStringify);

  const file = await processor.process(html);

  // extract just the nav element from the html
  const htmlString = String(file);
  const tocRegex = /<nav class="blog-toc">([\s\S]*?)<\/nav>/;
  const match = htmlString.match(tocRegex);

  return match ? `<nav class="blog-toc">${match[1]}</nav>` : '';
}
