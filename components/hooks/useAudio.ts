import { useState, useRef, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stopMusic } from "../../redux/music.slice";

const useAudio = () => {
  const music = useSelector((state: any) => state.music);
  const dispatch = useDispatch();

  const url = process?.env?.NEXT_PUBLIC_AUDIO!;

  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(url!) : undefined
  );

  const [audio] = useState(musicPlayers);
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    music.isPlay ? audio.current?.play() : audio.current?.pause();
  }, [music.isPlay]);

  useEffect(() => {
    audio.current?.addEventListener("ended", () => dispatch(stopMusic()));
    return () => {
      audio.current?.removeEventListener("ended", () => dispatch(stopMusic()));
    };
  }, []);

  return [playing, toggle] as const;
};

export { useAudio };
