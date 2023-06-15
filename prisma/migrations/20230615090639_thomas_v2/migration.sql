/*
  Warnings:

  - You are about to drop the column `userId` on the `review` table. All the data in the column will be lost.
  - Added the required column `userName` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_userId_fkey`;

-- AlterTable
ALTER TABLE `review` DROP COLUMN `userId`,
    ADD COLUMN `userName` VARCHAR(191) NOT NULL;
