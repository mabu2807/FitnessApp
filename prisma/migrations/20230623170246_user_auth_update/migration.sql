/*
  Warnings:

  - You are about to drop the `nutritiontippsarticels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `nutritiontippsarticels`;

-- CreateTable
CREATE TABLE `NutritionTippsArticles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `text` LONGTEXT NOT NULL,
    `imagePath` VARCHAR(191) NOT NULL,
    `link` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
