#!/bin/sh

pnpm install
pnpm prune
pnpm run prisma migrate deploy
pnpm run start:prod
