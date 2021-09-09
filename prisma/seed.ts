import { PrismaClient, Role } from '@prisma/client';
import * as argon2 from 'argon2';

const client = new PrismaClient();

/* eslint prefer-arrow/prefer-arrow-functions: off*/
async function main() {
  const setupPassword = process.env.SETUP_PASSWORD;

  let passwordHash;

  if (setupPassword) {
    passwordHash = await argon2.hash(setupPassword);
  } else {
    console.error('Setup password was not set');
    process.exit(1);
  }

  let user = require('/data/user.json');

  Object.defineProperty(user, 'passwordHash', {
    value: passwordHash,
    enumerable: true
  });

  Object.defineProperty(user, 'role', {
    value: Role.Admin,
    enumerable: true
  });

  user = await client.user.upsert({
    where: {
      email: user.email
    },
    update: user,
    create: user
  });

  if (!user) {
    console.error('Failed to create the user');
    process.exit(1);
  }

  return;
}

main()
  .catch(console.error)
  .finally(async () => {
    await client.$disconnect();
  });
