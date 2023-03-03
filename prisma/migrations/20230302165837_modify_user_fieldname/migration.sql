/*
  Warnings:

  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `User` table. All the data in the column will be lost.
  - Added the required column `active` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `created_at`,
    DROP COLUMN `created_by`,
    DROP COLUMN `updated_at`,
    DROP COLUMN `updated_by`,
    ADD COLUMN `active` BOOLEAN NOT NULL,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `createdBy` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedBy` VARCHAR(191) NOT NULL;
