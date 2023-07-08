/*
  Warnings:

  - You are about to drop the column `averageSpeed` on the `cardioexerciseperformance` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `cardioexerciseperformance` table. All the data in the column will be lost.
  - You are about to drop the column `set` on the `liftingexerciseperformance` table. All the data in the column will be lost.
  - Added the required column `disctance` to the `CardioExercisePerformance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `CardioExercisePerformance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cardioexerciseperformance` DROP COLUMN `averageSpeed`,
    DROP COLUMN `duration`,
    ADD COLUMN `disctance` DOUBLE NOT NULL,
    ADD COLUMN `time` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `liftingexerciseperformance` DROP COLUMN `set`;
