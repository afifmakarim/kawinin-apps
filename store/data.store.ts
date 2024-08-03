import { create } from "zustand";

interface Person {
  name: string;
  nick: string;
  fatherName: string;
  motherName: string;
  instagram: string;
  photo: string;
}

interface WeddingEvent {
  address: string;
  addressLocation: string;
  date: Date;
}

interface Gallery {
  imageUrl: string;
}

export interface WeddingDetails {
  title: string;
  weddingPhoto: string;
  grooms: Person;
  brides: Person;
  weddingCeremony: WeddingEvent;
  weddingReception: WeddingEvent;
  galleries: Gallery[];
}

interface Store {
  data: WeddingDetails;
}

interface ActionStore {
  setData: (data: WeddingDetails) => void;
}

export const useDataStore = create<Store & ActionStore>()((set) => ({
  data: {
    title: "",
    weddingPhoto: "",
    grooms: {
      name: "",
      nick: "",
      fatherName: "",
      motherName: "",
      instagram: "",
      photo: "",
    },
    brides: {
      name: "",
      nick: "",
      fatherName: "",
      motherName: "",
      instagram: "",
      photo: "",
    },
    weddingCeremony: {
      address: "",
      addressLocation: "",
      date: new Date(),
    },
    weddingReception: {
      address: "",
      addressLocation: "",
      date: new Date(),
    },
    galleries: [],
  },
  setData(data) {
    set({ data });
  },
}));
