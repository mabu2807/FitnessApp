/*
  Warnings:

  - Added the required column `auth_method` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `auth_method` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NULL;
