/*
  Warnings:

  - Added the required column `link` to the `NutritionTippsArticels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `nutritiontippsarticels` ADD COLUMN `link` VARCHAR(191) NOT NULL;
