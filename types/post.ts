import { Image } from './image';

export type Post = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: Image;
};
