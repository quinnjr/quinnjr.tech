/*
  Warnings:

  - A unique constraint covering the columns `[titleSlug]` on the table `articles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `titleSlug` to the `articles` table without a default value. This is not possible if the table is not empty.
  - Made the column `profile` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "articles" ADD COLUMN     "titleSlug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "profile" SET NOT NULL;

-- CreateTable
CREATE TABLE "conferences" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "userId" UUID NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "conferences.name_unique" ON "conferences"("name");

-- CreateIndex
CREATE UNIQUE INDEX "articles.titleSlug_unique" ON "articles"("titleSlug");

-- AddForeignKey
ALTER TABLE "conferences" ADD FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
