import { IResponse } from "../../App";
import albumCover from "../../assets/images/AlbumCover.png";
import PlayerButtons from "./PlayerButtons";
import testAudio from "C:/Users/mathe/Desktop/Projetos/Bora-Codar/MusicPlayer/assets/audios/8CHRW33-chill-beat.mp3";

interface PlayerProps {
  size: "Full-Size" | "Small-Size" | "Compact";
  playlist: IResponse[];
}

function playAudio(audio: IResponse) {
  console.log(audio.Path);
}

export default function Player({ size, playlist }: PlayerProps) {
  playAudio(playlist[0]);
  return (
    <div
      className={`bg-custom-light-purple text-custom-light-gray flex flex-col ${
        size === "Full-Size" ? "p-9" : "p-8 w-fit"
      } rounded-lg `}
    >
      <div
        className={`${
          size === "Full-Size"
            ? "flex flex-col mb-7"
            : "flex flex-row mb-7 p-0 items-center "
        }`}
      >
        <img
          src={albumCover}
          className={size !== "Full-Size" ? " w-1/6" : "mb-7"}
        />
        <div
          className={`flex flex-col ${size !== "Full-Size" ? " ml-7" : null}`}
        >
          <strong className="text-2xl ">Title Of The Song</strong>
          <span className="opacity-70 text-xl">artist</span>
        </div>
      </div>
      <PlayerButtons />
      {size !== "Compact" ? <div className="mt-7">Progress Bar</div> : null}
    </div>
  );
}
