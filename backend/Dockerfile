FROM node:lts-alpine as builder

WORKDIR /app

COPY . .

RUN npm i -g pnpm && \
  pnpm i -g @nestjs/cli && \
  chown -R node:node /app

USER node

RUN pnpm set store-dir ~/.pnpm-store && \
  pnpm i --no-optional && \
  pnpx prisma generate && \
  pnpx nest build

FROM node:lts-alpine

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package*.json /app
COPY --from=builder /app/pnpm-lock.yaml /app/pnpm-lock.yaml

ENV NODE_ENV production

RUN npm i -g pnpm && \
  pnpm i -g @nestjs/cli && \
  chown -R node:node /app

USER node

RUN pnpm set stor-dir ~/.pnpm-store && \
  pnpm i --no-optional

EXPOSE 3000

ENTRYPOINT ["pnpm", "run", "start:prod"]
