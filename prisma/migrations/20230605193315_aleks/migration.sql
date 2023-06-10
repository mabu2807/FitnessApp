/*
  Warnings:

  - Added the required column `imagePath` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `TrainingPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagePath` to the `TrainingPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `TrainingPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `imagePath` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `trainingplan` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `imagePath` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
