#!/usr/bin/env sh

if [[ $ENV == "production" ]]; then
  pnpm install --prod --no-optional
  pnpx prisma migrate deploy
  pnpm run serve:ssr
else
  pnpm install --no-optional
  pnpx prisma generate
  pnpm run dev:ssr
fi

