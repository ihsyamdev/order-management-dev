/*
  Warnings:

  - You are about to drop the column `orderId` on the `OrderItem` table. All the data in the column will be lost.
  - Added the required column `parentId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `OrderItem` DROP FOREIGN KEY `OrderItem_orderId_fkey`;

-- AlterTable
ALTER TABLE `OrderItem` DROP COLUMN `orderId`,
    ADD COLUMN `parentId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
