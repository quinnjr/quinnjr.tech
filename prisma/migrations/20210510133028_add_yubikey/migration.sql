/*
  Warnings:

  - You are about to drop the column `useOTP` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `otpSecret` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "useOTP",
DROP COLUMN "otpSecret",
ADD COLUMN     "yubikeys" TEXT[],
ALTER COLUMN "birthday" SET DEFAULT '1970-01-01 00:00:00 +00:00';
