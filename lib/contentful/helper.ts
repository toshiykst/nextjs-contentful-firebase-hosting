import client from './client';

type ContentType = 'post';

export const getEntries = async <T>(
  contentType: ContentType,
  params?: { [key: string]: string },
) => {
  return await client.getEntries<T>({ content_type: contentType, ...params });
};
