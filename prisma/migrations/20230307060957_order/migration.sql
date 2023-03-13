/*
  Warnings:

  - You are about to alter the column `quantity` on the `OrderDetail` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `unitprice` on the `OrderDetail` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.
  - You are about to alter the column `amount` on the `OrderDetail` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Decimal(65,30)`.
  - You are about to drop the `OrderHead` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `OrderDetail` MODIFY `quantity` INTEGER NOT NULL,
    MODIFY `unitprice` DECIMAL(65, 30) NOT NULL,
    MODIFY `amount` DECIMAL(65, 30) NOT NULL;

-- DropTable
DROP TABLE `OrderHead`;

-- CreateTable
CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `orderDate` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `customerId` VARCHAR(191) NOT NULL,
    `approver` VARCHAR(191) NOT NULL,
    `approvalStage` VARCHAR(191) NOT NULL,
    `confirmed` VARCHAR(191) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
