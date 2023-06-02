/*
  Warnings:

  - You are about to drop the column `transaction_time` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the `payment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `payment` DROP FOREIGN KEY `payment_ibfk_1`;

-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `transaction_time`,
    ADD COLUMN `amount` INTEGER NULL,
    ADD COLUMN `payment_time` DATETIME(0) NULL;

-- DropTable
DROP TABLE `payment`;
