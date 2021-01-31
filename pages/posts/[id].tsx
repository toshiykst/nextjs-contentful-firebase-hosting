import React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Post } from 'types/post';
import { getPosts, getPost } from 'lib/contentful/post';

type Props = {
  post: Post;
};

type Params = {
  id: Post['id'];
};

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <div>
      <h2>post detail</h2>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <div>
        <img src={post.image.url} alt={post.image.alt} />
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getPosts();

  const paths = posts.map(post => ({
    params: {
      id: post.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const post = await getPost(params?.id ?? '');

  return { props: { post } };
};

export default PostPage;
