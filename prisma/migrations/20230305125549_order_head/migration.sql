-- CreateTable
CREATE TABLE `OrderHead` (
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

-- CreateTable
CREATE TABLE `OrderDetail` (
    `id` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `parentId` VARCHAR(191) NOT NULL,
    `lineNo` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `quantity` DECIMAL(65, 30) NOT NULL,
    `unitprice` DECIMAL(65, 30) NOT NULL,
    `amount` DECIMAL(65, 30) NOT NULL,
    `remark` VARCHAR(191) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
