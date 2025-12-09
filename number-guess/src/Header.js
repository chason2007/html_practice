import React from "react";

const Header = ({ displayNumber, onAgain }) => {
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again" onClick={onAgain}>
        Again!
      </button>
      <div className="number">{displayNumber}</div>
    </header>
  );
};

export default Header;
