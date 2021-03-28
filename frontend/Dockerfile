FROM node:lts-alpine as builder

WORKDIR /app

COPY . .

RUN apk --no-cache add libc6-compat && \
  npm i -g pnpm && \
  pnpm i -g serve && \
  chown -R node:node /app

USER node

RUN pnpm set store-dir ~/.pnpm-store && \
  pnpm i --no-optional && \
  pnpx ng build

ENTRYPOINT ["pnpm", "start"]
