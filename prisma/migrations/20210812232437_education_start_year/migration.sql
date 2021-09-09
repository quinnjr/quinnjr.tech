-- AlterTable
ALTER TABLE "eductation" ADD COLUMN     "startYear" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "birthday" SET DEFAULT '1970-01-01 00:00:00 +00:00';
