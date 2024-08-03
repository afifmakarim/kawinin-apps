/*
  Warnings:

  - Added the required column `date` to the `wedding_ceremony` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `wedding_party` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wedding_ceremony" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "wedding_party" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
