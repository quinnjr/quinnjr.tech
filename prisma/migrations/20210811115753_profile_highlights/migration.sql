/*
  Warnings:

  - Added the required column `campusImage` to the `eductation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `eductation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "eductation" ADD COLUMN     "campusImage" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "profileHighlights" TEXT[],
ALTER COLUMN "birthday" SET DEFAULT '1970-01-01 00:00:00 +00:00';
