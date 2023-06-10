/*
  Warnings:

  - Made the column `fat` on table `nutritionalvalues` required. This step will fail if there are existing NULL values in that column.
  - Made the column `saturatedFat` on table `nutritionalvalues` required. This step will fail if there are existing NULL values in that column.
  - Made the column `carbohydrates` on table `nutritionalvalues` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sugar` on table `nutritionalvalues` required. This step will fail if there are existing NULL values in that column.
  - Made the column `protein` on table `nutritionalvalues` required. This step will fail if there are existing NULL values in that column.
  - Made the column `salt` on table `nutritionalvalues` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `nutritionalvalues` MODIFY `fat` DOUBLE NOT NULL,
    MODIFY `saturatedFat` DOUBLE NOT NULL,
    MODIFY `carbohydrates` DOUBLE NOT NULL,
    MODIFY `sugar` DOUBLE NOT NULL,
    MODIFY `protein` DOUBLE NOT NULL,
    MODIFY `salt` DOUBLE NOT NULL;
