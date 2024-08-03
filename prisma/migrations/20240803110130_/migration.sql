/*
  Warnings:

  - The primary key for the `galleries` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `wedding_ceremony` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wedding_party` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "weddings" DROP CONSTRAINT "weddings_weddingCeremonyId_fkey";

-- DropForeignKey
ALTER TABLE "weddings" DROP CONSTRAINT "weddings_weddingPartyId_fkey";

-- AlterTable
ALTER TABLE "galleries" DROP CONSTRAINT "galleries_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "galleries_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "galleries_id_seq";

-- DropTable
DROP TABLE "wedding_ceremony";

-- DropTable
DROP TABLE "wedding_party";

-- CreateTable
CREATE TABLE "weddingCeremony" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "addressLocation" TEXT NOT NULL,
    "mapLocation" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "weddingCeremony_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "weddingParty" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "addressLocation" TEXT NOT NULL,
    "mapLocation" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "weddingParty_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "weddings" ADD CONSTRAINT "weddings_weddingCeremonyId_fkey" FOREIGN KEY ("weddingCeremonyId") REFERENCES "weddingCeremony"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weddings" ADD CONSTRAINT "weddings_weddingPartyId_fkey" FOREIGN KEY ("weddingPartyId") REFERENCES "weddingParty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
