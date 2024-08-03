-- CreateEnum
CREATE TYPE "status" AS ENUM ('HADIR', 'TIDAK_HADIR', 'TENTATIF');

-- CreateTable
CREATE TABLE "weddings" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bridesId" TEXT NOT NULL,
    "groomsId" TEXT NOT NULL,
    "detailsId" TEXT NOT NULL,

    CONSTRAINT "weddings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brides" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "brides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grooms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "grooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wedding_details" (
    "id" TEXT NOT NULL,
    "weddingId" INTEGER NOT NULL,
    "brideId" INTEGER NOT NULL,
    "groomId" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "addressLocation" TEXT NOT NULL,
    "mapLocation" TEXT NOT NULL,
    "bridesId" TEXT,
    "groomsId" TEXT,

    CONSTRAINT "wedding_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "galleries" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "weddingsId" TEXT,

    CONSTRAINT "galleries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testimonials" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "weddingsId" TEXT,

    CONSTRAINT "testimonials_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "weddings" ADD CONSTRAINT "weddings_detailsId_fkey" FOREIGN KEY ("detailsId") REFERENCES "wedding_details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weddings" ADD CONSTRAINT "weddings_bridesId_fkey" FOREIGN KEY ("bridesId") REFERENCES "brides"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weddings" ADD CONSTRAINT "weddings_groomsId_fkey" FOREIGN KEY ("groomsId") REFERENCES "grooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wedding_details" ADD CONSTRAINT "wedding_details_bridesId_fkey" FOREIGN KEY ("bridesId") REFERENCES "brides"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wedding_details" ADD CONSTRAINT "wedding_details_groomsId_fkey" FOREIGN KEY ("groomsId") REFERENCES "grooms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "galleries" ADD CONSTRAINT "galleries_weddingsId_fkey" FOREIGN KEY ("weddingsId") REFERENCES "weddings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_weddingsId_fkey" FOREIGN KEY ("weddingsId") REFERENCES "weddings"("id") ON DELETE SET NULL ON UPDATE CASCADE;
