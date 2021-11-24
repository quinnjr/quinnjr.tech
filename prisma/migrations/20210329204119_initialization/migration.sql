-- CreateEnum
CREATE TYPE "Role" AS ENUM ('User', 'Admin');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "profilePicture" TEXT,
    "profile" TEXT,
    "skills" TEXT[],
    "role" "Role" NOT NULL DEFAULT E'User',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articles" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "authorId" UUID NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experiences" (
    "id" UUID NOT NULL,
    "employer" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "startYear" INTEGER NOT NULL,
    "endYear" INTEGER,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eductation" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "graduationYear" INTEGER,
    "activities" TEXT[],
    "userId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certifications" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "certifier" TEXT NOT NULL,
    "userId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users.email_unique" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users.firstName_unique" ON "users"("firstName");

-- CreateIndex
CREATE UNIQUE INDEX "users.lastName_unique" ON "users"("lastName");

-- CreateIndex
CREATE UNIQUE INDEX "articles.title_unique" ON "articles"("title");

-- CreateIndex
CREATE UNIQUE INDEX "eductation.name_unique" ON "eductation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "eductation.graduationYear_unique" ON "eductation"("graduationYear");

-- CreateIndex
CREATE UNIQUE INDEX "certifications.name_unique" ON "certifications"("name");

-- CreateIndex
CREATE UNIQUE INDEX "projects.name_unique" ON "projects"("name");

-- AddForeignKey
ALTER TABLE "articles" ADD FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experiences" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eductation" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certifications" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
