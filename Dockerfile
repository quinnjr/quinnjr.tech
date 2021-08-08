# syntax=docker/dockerfile:1.3-labs
FROM node:lts-alpine as builder

WORKDIR /app

COPY . .

RUN <<EOF
  apk --no-cache add libc6-compat
  npm i -g pnpm
  chown -R node:node /app
EOF

USER node

RUN <<EOF
  pnpm set store-dir $HOME/.pnpm-store
  pnpm install --no-optional
  pnpx prisma generate
  pnpm run build:ssr
  pnpm prune --no-optional --prod
EOF

EXPOSE 3000

ENTRYPOINT ["pnpm", "run", "serve:ssr"]
