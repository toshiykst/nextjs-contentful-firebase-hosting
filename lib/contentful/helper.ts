import client from './client';

type ContentType = 'post';

export const getEntries = async <T>(
  contentType: ContentType,
  params?: { [key: string]: string },
) => client.getEntries<T>({ content_type: contentType, ...params });

export const getEntry = async <T>(
  id: string,
  contentType: ContentType,
  params?: { [key: string]: string },
) => client.getEntry<T>(id, { content_type: contentType, ...params });
