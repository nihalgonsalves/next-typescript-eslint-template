// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';

import NextI18Next from './NextI18Next';

const port = process.env.PORT ?? 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

const main = async () => {
  await app.prepare();
  const server = express();

  server.use(nextI18NextMiddleware(NextI18Next));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port);

  // eslint-disable-next-line no-console
  console.log(`> Ready on http://localhost:${port}`);
};

void main();
