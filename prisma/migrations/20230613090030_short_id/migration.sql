/*
  Warnings:

  - The required column `shortId` was added to the `Product` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `shortId` VARCHAR(191) NOT NULL;
