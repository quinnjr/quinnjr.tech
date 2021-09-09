/*
  Warnings:

  - A unique constraint covering the columns `[linkedin]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[github]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "github" TEXT,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "website" TEXT,
ALTER COLUMN "birthday" SET DEFAULT '1970-01-01 00:00:00 +00:00';

-- CreateIndex
CREATE UNIQUE INDEX "users.linkedin_unique" ON "users"("linkedin");

-- CreateIndex
CREATE UNIQUE INDEX "users.github_unique" ON "users"("github");
