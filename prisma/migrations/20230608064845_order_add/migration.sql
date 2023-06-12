/*
  Warnings:

  - You are about to drop the column `product` on the `OrderItem` table. All the data in the column will be lost.
  - Added the required column `approvalStage` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `approver` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `confirmed` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `draftFlag` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderDate` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lineNumber` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remark` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitPrice` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Order` ADD COLUMN `approvalStage` VARCHAR(191) NOT NULL,
    ADD COLUMN `approver` VARCHAR(191) NOT NULL,
    ADD COLUMN `confirmed` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `createdBy` VARCHAR(191) NOT NULL,
    ADD COLUMN `draftFlag` BOOLEAN NOT NULL,
    ADD COLUMN `orderDate` DATETIME(3) NOT NULL,
    ADD COLUMN `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updatedBy` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `OrderItem` DROP COLUMN `product`,
    ADD COLUMN `active` BOOLEAN NOT NULL,
    ADD COLUMN `amount` INTEGER NOT NULL,
    ADD COLUMN `lineNumber` INTEGER NOT NULL,
    ADD COLUMN `productId` VARCHAR(191) NOT NULL,
    ADD COLUMN `remark` VARCHAR(191) NOT NULL,
    ADD COLUMN `unitPrice` INTEGER NOT NULL;
