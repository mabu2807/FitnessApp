/*
  Warnings:

  - You are about to drop the column `foodDiaryId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `usertrainingplan` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foodDiaryId` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `UserDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `fooddiary` DROP FOREIGN KEY `FoodDiary_userId_fkey`;

-- DropForeignKey
ALTER TABLE `session` DROP FOREIGN KEY `Session_userId_fkey`;

-- DropForeignKey
ALTER TABLE `usertrainingplan` DROP FOREIGN KEY `UserTrainingPlan_trainingPlanId_fkey`;

-- DropForeignKey
ALTER TABLE `usertrainingplan` DROP FOREIGN KEY `UserTrainingPlan_userId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `foodDiaryId`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    MODIFY `userDetailsId` INTEGER NULL;

-- AlterTable
ALTER TABLE `userdetails` ADD COLUMN `foodDiaryId` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `usertrainingplan`;

-- CreateTable
CREATE TABLE `UserDetailsTrainingPlan` (
    `userDetailsId` INTEGER NOT NULL,
    `trainingPlanId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`userDetailsId`, `trainingPlanId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserDetailsTrainingPlan` ADD CONSTRAINT `UserDetailsTrainingPlan_userDetailsId_fkey` FOREIGN KEY (`userDetailsId`) REFERENCES `UserDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserDetailsTrainingPlan` ADD CONSTRAINT `UserDetailsTrainingPlan_trainingPlanId_fkey` FOREIGN KEY (`trainingPlanId`) REFERENCES `TrainingPlan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `UserDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodDiary` ADD CONSTRAINT `FoodDiary_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `UserDetails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
