/*
  Warnings:

  - You are about to drop the column `detailsId` on the `weddings` table. All the data in the column will be lost.
  - You are about to drop the `wedding_details` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `weddingCeremonyId` to the `weddings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weddingPartyId` to the `weddings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "wedding_details" DROP CONSTRAINT "wedding_details_bridesId_fkey";

-- DropForeignKey
ALTER TABLE "wedding_details" DROP CONSTRAINT "wedding_details_groomsId_fkey";

-- DropForeignKey
ALTER TABLE "weddings" DROP CONSTRAINT "weddings_detailsId_fkey";

-- AlterTable
ALTER TABLE "weddings" DROP COLUMN "detailsId",
ADD COLUMN     "weddingCeremonyId" TEXT NOT NULL,
ADD COLUMN     "weddingPartyId" TEXT NOT NULL;

-- DropTable
DROP TABLE "wedding_details";

-- CreateTable
CREATE TABLE "wedding_ceremony" (
    "id" TEXT NOT NULL,
    "weddingId" INTEGER NOT NULL,
    "brideId" INTEGER NOT NULL,
    "groomId" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "addressLocation" TEXT NOT NULL,
    "mapLocation" TEXT NOT NULL,

    CONSTRAINT "wedding_ceremony_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wedding_party" (
    "id" TEXT NOT NULL,
    "weddingId" INTEGER NOT NULL,
    "brideId" INTEGER NOT NULL,
    "groomId" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "addressLocation" TEXT NOT NULL,
    "mapLocation" TEXT NOT NULL,

    CONSTRAINT "wedding_party_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "weddings" ADD CONSTRAINT "weddings_weddingCeremonyId_fkey" FOREIGN KEY ("weddingCeremonyId") REFERENCES "wedding_ceremony"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weddings" ADD CONSTRAINT "weddings_weddingPartyId_fkey" FOREIGN KEY ("weddingPartyId") REFERENCES "wedding_party"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
