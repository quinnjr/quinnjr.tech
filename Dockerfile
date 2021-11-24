# syntax=docker/dockerfile:1.3-labs
FROM node:lts-alpine as builder

ARG DATABASE_URL

ENV NODE_ENV=development

WORKDIR /app

COPY . .

RUN <<EOF
  apk --no-cache add libc6-compat zlib zlib-dev optipng pkgconfig autoconf automake nasm build-base
  npm i -g pnpm
  pnpm install --no-optional
  pnpx prisma generate
  pnpm run build:ssr
EOF

FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder --chown=node:node /app/dist ./dist
COPY --from=builder --chown=node:node /app/prisma ./prisma
COPY --from=builder --chown=node:node /app/package.json ./package.json
COPY --from=builder --chown=node:node /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder --chown=node:node /app/node_modules/.pnpm/@prisma+client@* ./node_modules/.pnpm
COPY --from=builder --chown=node:node /app/node_modules/@prisma ./node_modules/
COPY --from=builder --chown=node:node /app/node_modules/.pnpm/argon2* ./node_modules/
COPY --from=builder --chown=node:node /app/node_modules/argon2 /

RUN npm i -g prisma && \
  chown -R node:node /app

USER node
EXPOSE 4200

ENTRYPOINT ["./docker-entry.sh"]
