import { useSound } from "react-sounds";

const useSoundEffect = (sound) => {
  const { play } = useSound(sound);

  return play;
};

export default useSoundEffect;

