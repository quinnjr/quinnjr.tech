#!/bin/sh

pnpm run prisma migrate deploy
pnpm run start:prod
