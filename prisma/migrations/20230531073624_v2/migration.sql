/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - Added the required column `foodDiaryId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userDetailsId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `name`,
    ADD COLUMN `foodDiaryId` INTEGER NOT NULL,
    ADD COLUMN `userDetailsId` INTEGER NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `UserDetails` (
    `userId` INTEGER NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `weight` DOUBLE NOT NULL,
    `height` INTEGER NOT NULL,

    UNIQUE INDEX `UserDetails_userId_key`(`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TrainingPlan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserTrainingPlan` (
    `userId` INTEGER NOT NULL,
    `trainingPlanId` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`userId`, `trainingPlanId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SessionTemplate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ExerciseTemplate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `sessionTemplateId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exercise` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sessionId` INTEGER NOT NULL,
    `exerciseTemplateId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LiftingExercisePerformance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `set` INTEGER NOT NULL,
    `repetitions` INTEGER NOT NULL,
    `weight` DOUBLE NOT NULL,
    `exerciseId` INTEGER NOT NULL,

    UNIQUE INDEX `LiftingExercisePerformance_exerciseId_key`(`exerciseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CardioExercisePerformance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `duration` INTEGER NOT NULL,
    `averageSpeed` DOUBLE NOT NULL,
    `exerciseId` INTEGER NOT NULL,

    UNIQUE INDEX `CardioExercisePerformance_exerciseId_key`(`exerciseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodDiary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `FoodDiary_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Meal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foodDiaryId` INTEGER NOT NULL,
    `day` DATETIME(3) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `dishId` INTEGER NOT NULL,

    UNIQUE INDEX `Meal_foodDiaryId_key`(`foodDiaryId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dish` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Dish_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NutritionalValues` (
    `dishId` INTEGER NOT NULL,
    `energy` INTEGER NOT NULL,
    `fat` DOUBLE NULL,
    `saturatedFat` DOUBLE NULL,
    `carbohydrates` DOUBLE NULL,
    `sugar` DOUBLE NULL,
    `protein` DOUBLE NULL,
    `salt` DOUBLE NULL,

    UNIQUE INDEX `NutritionalValues_dishId_key`(`dishId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SessionTemplateToTrainingPlan` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_SessionTemplateToTrainingPlan_AB_unique`(`A`, `B`),
    INDEX `_SessionTemplateToTrainingPlan_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ExerciseTemplateToSessionTemplate` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ExerciseTemplateToSessionTemplate_AB_unique`(`A`, `B`),
    INDEX `_ExerciseTemplateToSessionTemplate_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserDetails` ADD CONSTRAINT `UserDetails_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTrainingPlan` ADD CONSTRAINT `UserTrainingPlan_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTrainingPlan` ADD CONSTRAINT `UserTrainingPlan_trainingPlanId_fkey` FOREIGN KEY (`trainingPlanId`) REFERENCES `TrainingPlan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SessionTemplate` ADD CONSTRAINT `SessionTemplate_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_sessionTemplateId_fkey` FOREIGN KEY (`sessionTemplateId`) REFERENCES `SessionTemplate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exercise` ADD CONSTRAINT `Exercise_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exercise` ADD CONSTRAINT `Exercise_exerciseTemplateId_fkey` FOREIGN KEY (`exerciseTemplateId`) REFERENCES `ExerciseTemplate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LiftingExercisePerformance` ADD CONSTRAINT `LiftingExercisePerformance_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `Exercise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CardioExercisePerformance` ADD CONSTRAINT `CardioExercisePerformance_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `Exercise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodDiary` ADD CONSTRAINT `FoodDiary_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Meal` ADD CONSTRAINT `Meal_foodDiaryId_fkey` FOREIGN KEY (`foodDiaryId`) REFERENCES `FoodDiary`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Meal` ADD CONSTRAINT `Meal_dishId_fkey` FOREIGN KEY (`dishId`) REFERENCES `Dish`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `NutritionalValues` ADD CONSTRAINT `NutritionalValues_dishId_fkey` FOREIGN KEY (`dishId`) REFERENCES `Dish`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SessionTemplateToTrainingPlan` ADD CONSTRAINT `_SessionTemplateToTrainingPlan_A_fkey` FOREIGN KEY (`A`) REFERENCES `SessionTemplate`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SessionTemplateToTrainingPlan` ADD CONSTRAINT `_SessionTemplateToTrainingPlan_B_fkey` FOREIGN KEY (`B`) REFERENCES `TrainingPlan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ExerciseTemplateToSessionTemplate` ADD CONSTRAINT `_ExerciseTemplateToSessionTemplate_A_fkey` FOREIGN KEY (`A`) REFERENCES `ExerciseTemplate`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ExerciseTemplateToSessionTemplate` ADD CONSTRAINT `_ExerciseTemplateToSessionTemplate_B_fkey` FOREIGN KEY (`B`) REFERENCES `SessionTemplate`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
