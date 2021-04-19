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
  rm -rf /app/.pnpm-store node_modules

FROM node:lts-alpine

ENV NODE_ENV production

WORKDIR /app

COPY --from=builder /app/dist/ ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .
COPY --from=builder /app/pnpm-lock.yaml .

RUN npm i -g npm@6 pnpm && \
  chown -R node:node /app

USER node

RUN pnpm install --prod && \
  pnpm run prisma generate && \
  pnpm prune --prod && \
  pnpm store prune

ENTRYPOINT ["/app/docker-entrypoint.sh"]
