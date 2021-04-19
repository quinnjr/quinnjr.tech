FROM node:lts-alpine as builder

ENV NODE_ENV development

WORKDIR /app

COPY . .

RUN npm i -g npm@6 && \
  npm i -g pnpm && \
  pnpm set store-dir /app/.pnpm-store && \
  pnpm i -g @nestjs/cli && \
  chown -R node:node /app

USER node

RUN pnpm set store-dir /app/.pnpm-store && \
  pnpm install --no-optional && \
  pnpx prisma generate && \
  pnpx nest build --webpack && \
  pnpm prune --prod && \
  pnpm store prune

ENV NODE_ENV production

EXPOSE 4200

ENTRYPOINT ["/app/docker-entrypoint.sh"]
