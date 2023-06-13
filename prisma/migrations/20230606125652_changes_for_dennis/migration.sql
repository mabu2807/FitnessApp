/*
  Warnings:

  - Added the required column `categoryId` to the `TrainingPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activityLevel` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dob` to the `UserDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `trainingplan` ADD COLUMN `categoryId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `userdetails` ADD COLUMN `activityLevel` INTEGER NOT NULL,
    ADD COLUMN `dob` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `TrainingPlan` ADD CONSTRAINT `TrainingPlan_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
