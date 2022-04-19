#!/usr/bin/env sh

if [[ $ENV = "production" ]]; then
  pnpm run serve:ssr
else
  pnpm install --no-optional
  pnpm run dev:ssr
fi
