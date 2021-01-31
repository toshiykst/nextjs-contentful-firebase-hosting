import { Asset, Entry } from 'contentful';
import { Post } from 'types/post';
import { getEntries, getEntry } from './helper';

const parsePost = (postEntry: Entry<Post>) => ({
  id: postEntry.sys.id,
  title: postEntry.fields.title,
  summary: postEntry.fields.summary,
  description: postEntry.fields.description,
  image: {
    url: ((postEntry.fields.image as unknown) as Asset)?.fields.file.url,
    alt: ((postEntry.fields.image as unknown) as Asset)?.fields.title,
  },
});

export const getPosts = async (): Promise<Post[]> => {
  const entries = await getEntries<Post>('post');
  return entries.items.map(parsePost);
};

export const getPost = async (id: string): Promise<Post> => {
  const entry = await getEntry<Post>(id, 'post');
  return parsePost(entry);
};
