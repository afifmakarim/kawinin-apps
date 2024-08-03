import { create } from "zustand";

type Store = {
  isPlay: boolean;
};

type ActionStore = {
  setToggleMusic: (isPlay: boolean) => void;
  stopMusic: () => void;
};

export const useMusicStore = create<Store & ActionStore>()((set) => ({
  isPlay: false,
  stopMusic: () => set({ isPlay: false }),
  setToggleMusic: (isPlay) => set({ isPlay }),
}));
