import { useState, useRef, useEffect } from "react";
import { useMusicStore } from "@/store/music.store";

export const useAudio = () => {
  const { isPlay, stopMusic, setToggleMusic } = useMusicStore((state) => state);

  const url = process?.env?.NEXT_PUBLIC_AUDIO ?? "./rc.mp3";

  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(url!) : undefined
  );

  const [audio] = useState(musicPlayers);

  const toggle = () => setToggleMusic(!isPlay);

  useEffect(() => {
    isPlay ? audio.current?.play() : audio.current?.pause();
  }, [isPlay]);

  useEffect(() => {
    audio.current?.addEventListener("ended", () => stopMusic());
    return () => {
      audio.current?.removeEventListener("ended", () => stopMusic());
    };
  }, []);

  return {
    toggle,
    isPlay,
  };
};
