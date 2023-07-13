/*
  Warnings:

  - You are about to drop the column `iamge` on the `exercisetemplate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `exercisetemplate` DROP COLUMN `iamge`,
    ADD COLUMN `image` LONGBLOB NULL;
