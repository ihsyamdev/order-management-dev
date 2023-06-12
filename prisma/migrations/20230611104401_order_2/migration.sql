/*
  Warnings:

  - Added the required column `createdBy` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `OrderItem` ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `createdBy` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedBy` VARCHAR(191) NOT NULL,
    MODIFY `quantity` VARCHAR(191) NOT NULL,
    MODIFY `amount` VARCHAR(191) NOT NULL,
    MODIFY `lineNumber` VARCHAR(191) NOT NULL,
    MODIFY `unitPrice` VARCHAR(191) NOT NULL;
