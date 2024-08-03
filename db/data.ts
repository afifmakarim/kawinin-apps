import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createNewWedding() {
  await prisma.weddings.create({
    data: {
      title: "Wedding of Budi and Budi",
      image: "https://picsum.photos/seed/picsum/400/400",
      grooms: {
        create: {
          name: "Budi",
          nickname: "Budi",
          fatherName: "Budi",
          motherName: "Budi",
          instagram: "Budi",
          photo: "https://picsum.photos/seed/picsum/400/400",
        },
      },
      brides: {
        create: {
          name: "Budi",
          nickname: "Budi",
          fatherName: "Budi",
          motherName: "Budi",
          instagram: "Budi",
          photo: "https://picsum.photos/seed/picsum/400/400",
        },
      },
      weddingCeremony: {
        create: {
          address: "",
          addressLocation: "Budi",
          date: new Date(),
          mapLocation: "Budi",
        },
      },
      weddingParty: {
        create: {
          address: "Budi",
          addressLocation: "Budi",
          date: new Date(),
          mapLocation: "Budi",
        },
      },
      galleries: {
        create: {
          image: "https://picsum.photos/seed/picsum/400/400",
        },
      },
    },
  });
}

export async function getWeddings() {
  const data = await prisma.weddings.findMany({
    include: {
      grooms: true,
      brides: true,
      weddingCeremony: true,
      weddingParty: true,
      galleries: true,
    },
  });

  const mappingData = data.map((wedding) => {
    return {
      title: wedding.title,
      weddingPhoto: wedding.image,
      grooms: wedding.grooms,
      brides: wedding.brides,
      weddingCeremony: wedding.weddingCeremony,
      weddingReception: wedding.weddingParty,
      galleries: wedding.galleries.map((gallery) => {
        return {
          imageUrl: gallery.image,
        };
      }),
    };
  });

  return mappingData[0];
}
