/*
  Warnings:

  - You are about to drop the column `customerId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `OrderDetail` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `OrderDetail` table. All the data in the column will be lost.
  - You are about to drop the column `unitprice` on the `OrderDetail` table. All the data in the column will be lost.
  - You are about to alter the column `lineNo` on the `OrderDetail` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `productId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `useId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `customer` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remark` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sales` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitPrice` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Product` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Product` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Order` DROP COLUMN `customerId`,
    DROP COLUMN `userId`,
    ADD COLUMN `customer` VARCHAR(191) NOT NULL,
    ADD COLUMN `remark` VARCHAR(191) NOT NULL,
    ADD COLUMN `sales` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `OrderDetail` DROP COLUMN `parentId`,
    DROP COLUMN `productId`,
    DROP COLUMN `unitprice`,
    ADD COLUMN `order` VARCHAR(191) NOT NULL,
    ADD COLUMN `product` VARCHAR(191) NOT NULL,
    ADD COLUMN `unitPrice` DECIMAL(65, 30) NOT NULL,
    MODIFY `lineNo` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Product` DROP PRIMARY KEY,
    DROP COLUMN `productId`,
    DROP COLUMN `productName`,
    DROP COLUMN `useId`,
    ADD COLUMN `active` BOOLEAN NOT NULL,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
