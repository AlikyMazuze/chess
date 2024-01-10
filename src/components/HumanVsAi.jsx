import React from "react";
import Chessboard from "chessboardjsx";
import Stockfish from "./HumanPlaying";

const VsAi = () => {
  return (
    <div className="flex justify-around items-center">
      <Stockfish>
        {({ position, onDrop }) => (
          <Chessboard
            id="stockfish"
            position={position}
            width={320}
            onDrop={onDrop}
            style={{ borderRadius: "5px", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)" }}
            orientation="black"
          />
        )}
      </Stockfish>
    </div>
  );
};

export default VsAi;
