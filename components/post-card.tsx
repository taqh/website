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
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <li className='group bg-card border rounded-lg hover:shadow-lg transition'>
      <Link href={link} className='flex flex-col'>
        <div className='relative z-10 rounded-t-md min-h-[170px] overflow-hidden'>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            loading='eager'
            className='object-cover size-full rounded-t-md group-hover:scale-105 transition duration-500'
          />
        </div>
        <div className='flex flex-col divide-y divide-dashed'>
          <div className='flex flex-col gap-2 p-4'>
            <h2 className='text-xl font-medium text-foreground hover:text-muted-foreground transition duration-300'>
              {post.title}
            </h2>
            <p className='text-muted-foreground line-clamp-2 text-sm'>
              {post.description}
            </p>
          </div>
          <div className='flex items-center gap-2 p-4'>
            <Image
              src={post.authors[0].image}
              alt={post.authors[0].name}
              width={32}
              height={32}
              loading='eager'
              className='aspect-square shrink-0 size-8 rounded-full'
            />
            <div className='flex flex-col text-xs'>
              <p>{post.authors[0].name}</p>
              <div className='flex items-center gap-2'>
                <time
                  className='text-muted-foreground'
                  dateTime={post.publishedAt.toString()}
                >
                  {formattedDate}
                </time>
                <span className='text-muted-foreground'>•</span>
                <p className='text-muted-foreground text-xs'>
                  {calculateReadTime(post.content)} min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default PostCard;
