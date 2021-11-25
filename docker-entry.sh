#!/usr/bin/env sh

if [[ $ENV == "production" ]]; then
  pnpx prisma migrate deploy
  pnpm run serve:ssr
else
  pnpm install --no-optional
  pnpx prisma generate
  pnpm run dev:ssr
fi

