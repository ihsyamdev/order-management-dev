/*
  Warnings:

  - You are about to drop the column `createdB` on the `Customer` table. All the data in the column will be lost.
  - Added the required column `createdBy` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Customer` DROP COLUMN `createdB`,
    ADD COLUMN `createdBy` VARCHAR(191) NOT NULL;
