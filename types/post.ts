import { Image } from './image';

export type Post = {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: Image;
};
