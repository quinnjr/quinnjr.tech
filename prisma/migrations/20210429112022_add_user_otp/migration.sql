-- AlterTable
ALTER TABLE "users" ADD COLUMN     "useOTP" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "otpSecret" TEXT,
ALTER COLUMN "birthday" SET DEFAULT '1970-01-01 00:00:00 +00:00';
