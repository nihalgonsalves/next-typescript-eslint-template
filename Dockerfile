FROM node:14-slim as builder

WORKDIR /usr/src/app

ADD package.json .
ADD yarn.lock .

RUN yarn install --frozen-lockfile

ADD tsconfig.json .
ADD tsconfig.server.json .
ADD src/ ./src/
ADD public/ ./public/

RUN yarn build

FROM node:14-slim

WORKDIR /usr/src/app

ADD package.json .
ADD yarn.lock .

RUN yarn install --frozen-lockfile --production

ADD public ./public/
COPY --from=builder /usr/src/app/.next/ ./.next/
COPY --from=builder /usr/src/app/build/ ./build/

ENV NODE_ENV=production

EXPOSE 3000

CMD ["yarn", "start"]
