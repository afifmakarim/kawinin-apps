export interface WeddingTypes {
  title: string;
  weddingPhoto: string;
  grooms: GroomsBridesTypes;
  brides: GroomsBridesTypes;
  weddingCeremony: CeremonyReceptionTypes;
  weddingReception: CeremonyReceptionTypes;
  galleries: PhotosTypes[];
}

export interface PhotosTypes {
  imageUrl: string;
}

export interface GroomsBridesTypes {
  name: string;
  nick: string;
  fatherName: string;
  motherName: string;
  ig: string;
  photos: PhotosTypes[];
}

export interface DatesTypes {
  day: string;
  date: string;
  month: string;
  year: string;
}

export interface CeremonyReceptionTypes {
  time: string;
  address: string;
  addressLocation: string;
  dates: DatesTypes;
}
