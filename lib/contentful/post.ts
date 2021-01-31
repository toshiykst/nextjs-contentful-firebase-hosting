import { Asset } from 'contentful';
import { Post } from 'types/post';
import { getEntries } from './helper';

export const getPosts = async (): Promise<Post[]> => {
  const entries = await getEntries<Post>('post');

  return entries.items.map(item => ({
    id: item.sys.id,
    slug: item.fields.slug,
    title: item.fields.title,
    summary: item.fields.summary,
    description: item.fields.description,
    image: {
      url: ((item.fields.image as unknown) as Asset)?.fields.file.url,
      alt: ((item.fields.image as unknown) as Asset)?.fields.title,
    },
  }));
};
