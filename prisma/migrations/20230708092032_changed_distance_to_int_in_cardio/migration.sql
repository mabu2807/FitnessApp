/*
  Warnings:

  - You are about to drop the column `disctance` on the `cardioexerciseperformance` table. All the data in the column will be lost.
  - Added the required column `distance` to the `CardioExercisePerformance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cardioexerciseperformance` DROP COLUMN `disctance`,
    ADD COLUMN `distance` INTEGER NOT NULL;
