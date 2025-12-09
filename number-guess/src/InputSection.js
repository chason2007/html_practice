import React from "react";

const InputSection = ({ guess, onGuessChange, onCheck, gameOver, onKeyPress }) => {
  return (
    <section className="left">
      <input
        type="number"
        className="guess"
        value={guess}
        onChange={(e) => onGuessChange(e.target.value)}
        onKeyPress={onKeyPress}
        disabled={gameOver}
      />
      <button className="btn check" onClick={onCheck} disabled={gameOver}>
        Check!
      </button>
    </section>
  );
};

export default InputSection;
