#!/usr/bin/env sh

pnpm install --no-optional
pnpx prisma generate
pnpm run dev:ssr
