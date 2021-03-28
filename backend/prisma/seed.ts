import { PrismaClient, Role } from '@prisma/client';
import * as argon2 from 'argon2';

const client = new PrismaClient()

async function main() {
  const setupPassword = process.env.SETUP_PASSWORD;

  const passwordHash = await argon2.hash(setupPassword);

  let user = require('../user.json');

  Object.defineProperty(user, 'passwordHash', {
    value: passwordHash,
    enumerable: true
  });

  Object.defineProperty(user, 'role', {
    value: Role.Admin,
    enumerable: true
  });

  user = await client.user.create({ data: user });

  if(!user) {
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
