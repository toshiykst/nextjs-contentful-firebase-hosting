import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { Post } from 'types/post';
import { getPosts } from 'lib/contentful/post';

type Props = {
  posts: Post[];
};

const IndexPage: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <header>
        <h1>Next.js with contentful</h1>
      </header>

      <section>
        <h2>posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <p>{post.title}</p>
              <p>{post.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return { props: { posts } };
};

export default IndexPage;
