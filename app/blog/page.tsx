import BlogContainer from '@/components/blog-container';
import PostCard from '@/components/post-card';
import { getPosts } from '@/lib/blog';
import { Fragment } from 'react';

export default async function HomePage() {
  const data = await getPosts();
  if (!data || !data.posts) return <div>No posts yet</div>;

  return (
    <BlogContainer className='py-28 max-w-none'>
      <section className='mb-12 text-center space-y-2'>
        <h1 className='text-3xl lg:text-5xl xl:text-6xl font-semibold text-primary'>
          Blog
        </h1>
        <p className='text-lg text-muted-foreground'>
          Latest insights and updates from the Rivo digital product agency
        </p>
      </section>
      <section>
        <ul className='grid max-sm:justify-center gap-8 grid-cols-[repeat(auto-fill,minmax(0,_320px))] w-full'>
          {data.posts.map((post) => (
            <Fragment key={post.id}>
              <PostCard post={post} />
            </Fragment>
          ))}
        </ul>
      </section>
    </BlogContainer>
  );
}
