-- CreateTable
CREATE TABLE `TestHead` (
    `id` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `orderDate` DATETIME(3) NOT NULL,
    `sales` VARCHAR(191) NOT NULL,
    `customer` VARCHAR(191) NOT NULL,
    `approver` VARCHAR(191) NOT NULL,
    `approvalStage` VARCHAR(191) NOT NULL,
    `confirmed` VARCHAR(191) NOT NULL,
    `remark` VARCHAR(191) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
