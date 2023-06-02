/*
  Warnings:

  - You are about to drop the column `amount` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `professional_id` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `service_request_id` on the `transaction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `transaction` DROP FOREIGN KEY `transaction_ibfk_1`;

-- DropForeignKey
ALTER TABLE `transaction` DROP FOREIGN KEY `transaction_ibfk_2`;

-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `amount`,
    DROP COLUMN `professional_id`,
    DROP COLUMN `service_request_id`,
    ADD COLUMN `finish_status` INTEGER NULL;
