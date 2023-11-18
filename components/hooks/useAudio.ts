import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stopMusic } from "../../redux/music.slice";
import { RootState } from "../../redux/store";

const useAudio = () => {
  const music = useSelector((state: RootState) => state.music);
  const dispatch = useDispatch();

  const url = process?.env?.NEXT_PUBLIC_AUDIO!;

  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(url) : undefined
  );

  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    music.isPlay ? musicPlayers.current?.play() : musicPlayers.current?.pause();
  }, [music.isPlay]);

  useEffect(() => {
    musicPlayers.current?.addEventListener("ended", () =>
      dispatch(stopMusic())
    );
    return () => {
      musicPlayers.current?.removeEventListener("ended", () =>
        dispatch(stopMusic())
      );
    };
  }, []);

  return [playing, toggle] as const;
};

export { useAudio };
