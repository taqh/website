import BlogContainer from '@/components/blog-container';
import PostCard from '@/components/post-card';
import { getPosts } from '@/lib/blog';
import { Fragment } from 'react';

export default async function HomePage() {
  const posts = await getPosts();
  if (!posts || !posts.length) return <div>No posts yet</div>;

  return (
    <BlogContainer className='py-28 max-w-none'>
      <section>
        <ul className='grid justify-center gap-20 grid-cols-[repeat(auto-fill,minmax(0,_400px))] w-full'>
          {posts.map((post) => (
            <Fragment key={post.id}>
              <PostCard post={post} />
            </Fragment>
          ))}
        </ul>
      </section>
    </BlogContainer>
  );
}
