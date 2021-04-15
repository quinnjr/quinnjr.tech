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
  pnpm fetch --no-optional

RUN pnpm install -r --offline --no-optional && \
  pnpx prisma generate && \
  pnpx nest build

FROM node:lts-alpine

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package*.json /app/
COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-lock.yaml

ENV NODE_ENV production

RUN npm i -g npm@6 && \
  npm i -g pnpm && \
  pnpm i -g @nestjs/cli && \
  chown -R node:node /app

USER node

RUN pnpm set stor-dir ~/.pnpm-store && \
  pnpm i --no-optional

EXPOSE 3000

ENTRYPOINT ["pnpm", "run", "start:prod"]
