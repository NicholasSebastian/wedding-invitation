"use client";
import { Fragment, useState } from "react";
import ReactHowler from "react-howler";
import type { FC, PropsWithChildren } from "react";

const MusicProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isPlaying, setPlaying] = useState(true);
  return (
    <Fragment>
      <ReactHowler html5 loop src="/turning-pages.mp3" playing={isPlaying} />
      <button 
        onClick={() => setPlaying(!isPlaying)}
        className="fixed top-4 left-4 z-10 border-2 border-white rounded-full w-10 h-10 flex justify-center items-center focus:outline-none">
        <div style={{ marginRight: -2 }}>►</div>
      </button>
      {children}
    </Fragment>
  );
}

export default MusicProvider;
