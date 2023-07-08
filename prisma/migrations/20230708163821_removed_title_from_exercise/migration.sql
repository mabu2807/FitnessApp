/*
  Warnings:

  - You are about to drop the column `title` on the `exercise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `exercise` DROP COLUMN `title`;

-- AlterTable
ALTER TABLE `liftingexerciseperformance` MODIFY `weight` INTEGER NOT NULL;
