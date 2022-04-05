# syntax=docker/dockerfile:1.3-labs
FROM node:lts-alpine as builder

ARG DATABASE_URL

ENV ENV=development
ENV NODE_ENV=development

WORKDIR /app

COPY . .

RUN <<EOF
  apk --no-cache add libc6-compat zlib zlib-dev optipng pkgconfig autoconf automake nasm build-base
  npm i -g pnpm
  pnpm install --no-optional --unsafe-perm
  pnpx prisma generate
  pnpm run build:ssr
EOF

FROM node:lts-alpine

ENV ENV=production
ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder --chown=node:node /app/dist/quinnjr-tech/browser /app/dist/quinnjr-tech/browser
COPY --from=builder --chown=node:node /app/dist/quinnjr-tech/server /app/dist/quinnjr-tech/server
COPY --from=builder --chown=node:node /app/prisma /app/prisma
COPY --from=builder --chown=node:node /app/package.json /app/package.json
COPY --from=builder --chown=node:node /app/angular.json /app/angular.json
COPY --from=builder --chown=node:node /app/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY --from=builder --chown=node:node /app/node_modules/.pnpm/@prisma+client@* /app/node_modules/.pnpm
COPY --from=builder --chown=node:node /app/node_modules/@prisma /app/node_modules/
COPY --from=builder --chown=node:node /app/node_modules/.pnpm/argon2* /app/node_modules/.pnpm
COPY --from=builder --chown=node:node /app/node_modules/argon2 /app/node_modules/argon2
COPY --from=builder --chown=node:node /app/docker-entry.sh /app/docker-entry.sh

RUN npm i -g pnpm && \
  npm i graphql-ws argon2 @prisma/client && \
  chown -R node:node /app

USER node
EXPOSE 4200

ENTRYPOINT ["/app/docker-entry.sh"]
