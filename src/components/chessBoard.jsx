'use client'
import React, { useState } from "react";
import RandomVsRandomGame from "./stockFish";
import VsAi from "./HumanVsAi";

const Chess = () => {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="flex flex-col items-center gap-2 flex-wrap my-5 w-fit">
      {playing ? 
        <VsAi />
          :
        <RandomVsRandomGame />
      }
      <button onClick={()=> setPlaying(prev => !prev)} className="btn text-white font-bold p-4 rounded-lg bg-zinc-800">
        {!playing ? "Faça um jogo"  : "Cancelar"}
      </button>
    </div>
  );
};

export default Chess;
