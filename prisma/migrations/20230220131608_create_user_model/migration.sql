-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `created_by` VARCHAR(191) NOT NULL,
    `updated_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_by` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
