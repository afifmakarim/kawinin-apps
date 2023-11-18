export interface WeddingDetails {
  title: string;
  weddingPhoto: string;
  grooms: {
    name: string;
    nick: string;
    fatherName: string;
    motherName: string;
    ig: string;
    photos: string;
  };
  brides: {
    name: string;
    nick: string;
    fatherName: string;
    motherName: string;
    ig: string;
    photos: string;
  };
  weddingCeremony: {
    address: string;
    addressLocation: string;
    time: string;
    mapLocation: string;
    dates: {
      day: string;
      date: string;
      month: string;
      year: string;
      fastTime: number;
    };
  };
  weddingReception: {
    address: string;
    addressLocation: string;
    time: string;
    mapLocation: string;
    dates: {
      day: string;
      date: string;
      month: string;
      year: string;
      fastTime: number;
    };
  };
  galleries: { imageUrl: string }[];
}
