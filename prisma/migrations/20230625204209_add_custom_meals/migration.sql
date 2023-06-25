/*
  Warnings:

  - Added the required column `authMethod` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `meal` DROP FOREIGN KEY `Meal_dishId_fkey`;

-- AlterTable
ALTER TABLE `meal` ADD COLUMN `customDishId` INTEGER NULL,
    MODIFY `dishId` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `authMethod` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `customDish` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `imagePath` VARCHAR(191) NOT NULL,
    `nutritionalValuesId` INTEGER NOT NULL,

    UNIQUE INDEX `customDish_nutritionalValuesId_key`(`nutritionalValuesId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Meal` ADD CONSTRAINT `Meal_dishId_fkey` FOREIGN KEY (`dishId`) REFERENCES `Dish`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Meal` ADD CONSTRAINT `Meal_customDishId_fkey` FOREIGN KEY (`customDishId`) REFERENCES `customDish`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customDish` ADD CONSTRAINT `customDish_nutritionalValuesId_fkey` FOREIGN KEY (`nutritionalValuesId`) REFERENCES `NutritionalValues`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
