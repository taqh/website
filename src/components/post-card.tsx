import type { Post } from '@/types/blog';
import Link from 'next/link';
import Image from 'next/image';
import { calculateReadTime } from '@/lib/blog';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  const link = `/blog/${post.slug}`;
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <li className='flex flex-col gap-4'>
      <Link href={link}>
        <div className='relative group z-10 rounded-t-md min-h-[240px]'>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            loading='eager'
            className='object-cover size-full h-[260px] rounded-t-md'
          />
        </div>
      </Link>
      <div className='flex flex-col gap-2'>
        <Link
          href={link}
          className='hover:text-muted-foreground transition duration-300'
        >
          <h2 className='text-3xl text-foreground hover:text-muted-foreground transition'>
            {post.title}
          </h2>
        </Link>
        <p className='text-muted-foreground line-clamp-2'>{post.description}</p>
        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-2'>
              <Image
                src={post.authors[0].image}
                alt={post.authors[0].name}
                width={36}
                height={36}
                loading='eager'
                className='aspect-square shrink-0 size-9 rounded-full'
              />
              <div className='flex flex-col gap-1 text-sm'>
                <p className='text-muted-foreground'>{post.authors[0].name}</p>
                <time dateTime={post.publishedAt.toString()}>
                  {formattedDate}
                </time>
              </div>
            </div>
          </div>
          <p className='text-muted-foreground text-sm'>
            {calculateReadTime(post.content)} min read
          </p>
          {/* <ul className='flex items-center gap-2'>
            {post.tags.map((tag) => (
              <li
                key={tag.id}
                className='text-xs text-muted-foreground hover:text-foreground hover:underline'
              >
                <a href={`/tag/${tag.slug}`}>#{tag.name}</a>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </li>
  );
}

export default PostCard;
