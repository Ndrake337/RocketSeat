import Player from "./components/Players/ExtendedPlayer";
import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";

async function getAudio() {
  const audio = await axios("http://localhost:3333/playlist");
  return audio.data;
}

export interface IResponse {
  Name: string;
  Author: string;
  Path: string;
}

export default function App() {
  const [playlist, setPlaylist] = useState<IResponse[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/playlist")
      .then((response) => {
        return setPlaylist(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-row items-center justify-center h-screen gap-8">
      {playlist ? <Player playlist={playlist} size="Full-Size" /> : null}
      <div className="flex flex-col gap-8">
        {playlist.length > 0 ? (
          <Player playlist={playlist} size="Small-Size" />
        ) : null}
        {playlist.length > 0 ? (
          <Player playlist={playlist} size="Compact" />
        ) : null}
      </div>
    </div>
  );
}
