-- AlterTable
ALTER TABLE `OrderDetail` MODIFY `lineNo` VARCHAR(191) NOT NULL,
    MODIFY `quantity` VARCHAR(191) NOT NULL,
    MODIFY `amount` VARCHAR(191) NOT NULL,
    MODIFY `unitPrice` VARCHAR(191) NOT NULL;
