import { createClient, CreateClientParams } from 'contentful';

const config: CreateClientParams = {
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
};

const client = createClient(config);

export default client;
