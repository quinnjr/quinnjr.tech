# syntax=docker/dockerfile:1.3-labs
FROM node:lts-alpine as builder

ENV ENV=development
ENV NODE_ENV=development
ENV NODE_OPTIONS="--max-old-space-size=8192"

# ARG SECRET_KEY
# ENV SECRET_KEY ${SECRET_KEY}
# ARG JWT_SECRET
# ENV JWT_SECRET ${JWT_SECRET}
# ARG GH_TOKEN
# ENV GH_TOKEN ${GH_TOKEN}

# ARG POSTGRES_USER
# ENV POSTGRES_USER ${POSTGRES_USER}
# ARG POSTGRES_PASSWORD
# ENV POSTGRES_PASSWORD ${POSTGRES_PASSWORD}
# ARG POSTGRES_DB
# ENV POSTGRES_DB ${POSTGRES_DB}

# ARG DATABASE_URL
# ENV DATABASE_URL ${DATABASE_URL}

# ARG REDIS_HOST
# ENV REDIS_HOST ${REDIS_HOST}
# ARG REDIS_PORT
# ENV REDIS_PORT ${REDIS_PORT}

# ARG YUBIKEY_CLIENT_ID
# ENV YUBIKEY_CLIENT_ID ${YUBIKEY_CLIENT_ID}
# ARG YUBIKEY_CLIENT_SECRET
# ENV YUBIKEY_CLIENT_SECRET ${YUBIKEY_CLIENT_SECRET}

WORKDIR /app

COPY . .

RUN <<EOF
  apk --no-cache add libc6-compat zlib zlib-dev optipng pkgconfig autoconf automake nasm build-base
  npm i -g pnpm
  pnpm install --no-optional --unsafe-perm
  pnpm run build:ssr
EOF

FROM node:lts-alpine

ENV ENV=production
ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder --chown=node:node /app/dist/quinnjr.tech/browser/ /app/dist/quinnjr.tech/browser
COPY --from=builder --chown=node:node /app/dist/quinnjr.tech/server/ /app/dist/quinnjr.tech/server
COPY --from=builder --chown=node:node /app/prisma/ /app/prisma/
COPY --from=builder --chown=node:node /app/package.json /app/package.json
COPY --from=builder --chown=node:node /app/angular.json /app/angular.json
COPY --from=builder --chown=node:node /app/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY --from=builder --chown=node:node /app/docker-entry.sh /app/docker-entry.sh

RUN npm i -g pnpm && \
  pnpm install --no-optional && \
  pnpm install -g prisma && \
  pnpx prisma generate && \
  pnpm uninstall -g prisma && \
  chown -R node:node /app

USER node
EXPOSE 4200

ENTRYPOINT ["/app/docker-entry.sh"]
