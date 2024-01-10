'use client'

import React, { useEffect, useState } from "react";
import Chess from "chess.js";
import dynamic from 'next/dynamic';

const Chessboard = dynamic(
  () => import('chessboardjsx'),
  { ssr: false }
);
function RandomVsRandomGame() {
  const [fen, setFen] = useState("start");

  useEffect(() => {
    if (typeof window == 'undefined') return;
    console.log('Run') 
    const game = new Chess();
    let timer = setTimeout(makeRandomMove, 1000);

    return () => {
      clearTimeout(timer);
    };

    function makeRandomMove() {
      let possibleMoves = game.moves();

      // exit if the game is over
      if (game.game_over() === true || game.in_draw() === true || possibleMoves.length === 0) return;

      let randomIndex = Math.floor(Math.random() * possibleMoves.length);
      game.move(possibleMoves[randomIndex]);
      setFen(game.fen());

      timer = setTimeout(makeRandomMove, 1000);
    }
  }, []);

  return (
    <div>
      <Chessboard
        width={320}
        id="random"
        position={fen}
        transitionDuration={300}
        boardStyle={{
          borderRadius: "5px",
          boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
        }}
      />
    </div>
  );
}

export default RandomVsRandomGame;
