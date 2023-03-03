/*
  Warnings:

  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreatedAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedBy` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `ProductId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `ProductName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedBy` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `UseId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `createdBy` to the `Product` table without a default value. This is not possible if the table is not empty.
  - The required column `productId` was added to the `Product` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `productName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `useId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` DROP PRIMARY KEY,
    DROP COLUMN `CreatedAt`,
    DROP COLUMN `CreatedBy`,
    DROP COLUMN `ProductId`,
    DROP COLUMN `ProductName`,
    DROP COLUMN `UpdatedAt`,
    DROP COLUMN `UpdatedBy`,
    DROP COLUMN `UseId`,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `createdBy` VARCHAR(191) NOT NULL,
    ADD COLUMN `productId` VARCHAR(191) NOT NULL,
    ADD COLUMN `productName` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedBy` VARCHAR(191) NOT NULL,
    ADD COLUMN `useId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`productId`);
