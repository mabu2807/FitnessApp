/*
  Warnings:

  - Added the required column `goal` to the `UserDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `userdetails` ADD COLUMN `goal` VARCHAR(191) NOT NULL;
