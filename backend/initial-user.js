const argon2 = require('argon2');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const user = require('./user.json');

async function main() {
  const passwordHash = await argon2.hash(user.password);

  const newUser = {
    email: user.email,
    passwordHash: passwordHash,
    firstName: user.firstName,
    middleName: user.middleName,
    lastName: user.lastName,
    skills: [],
    profile: "",
    role: 'Admin'
  };

  const dbUser = await prisma.user.create({
    data: newUser
  });

  return dbUser;
}

main()
  .then((output) => {
    console.log(output);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
