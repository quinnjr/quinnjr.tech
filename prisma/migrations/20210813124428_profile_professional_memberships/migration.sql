-- AlterTable
ALTER TABLE "users" ADD COLUMN     "professionalMemberships" TEXT[],
ALTER COLUMN "birthday" SET DEFAULT '1970-01-01 00:00:00 +00:00';
