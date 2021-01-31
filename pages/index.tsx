import React from 'react';
import { NextPage } from 'next';

const MOCK_POSTS = [
  { id: 1, title: 'title1', description: 'description1' },
  { id: 2, title: 'title2', description: 'description2' },
  { id: 3, title: 'title3', description: 'description3' },
  { id: 4, title: 'title4', description: 'description4' },
  { id: 4, title: 'title5', description: 'description5' },
];

const IndexPage: NextPage = () => {
  return (
    <div>
      <header>
        <h1>Next.js with contentful</h1>
      </header>

      <section>
        <h2>posts</h2>
        <ul>
          {MOCK_POSTS.map(post => (
            <li key={post.id}>
              <p>{post.title}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default IndexPage;
