FROM node:lts-alpine as builder

WORKDIR /app

COPY . .

RUN apk --no-cache add libc6-compat && \
  npm i -g pnpm && \
  chown -R node:node /app

USER node

RUN pnpm set store-dir ~/.pnpm-store && \
  pnpm i --no-optional && \
  pnpx ng build

FROM nginx:mainline-alpine

WORKDIR /app

RUN chown -R node:node /app

USER node

COPY --from=builder /app/dist/frontend ./dist
COPY --from=builder /app/etc/nginx/templates/default.conf.template etc/nginx/templates/default.conf.template
