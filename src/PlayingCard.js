// import React, { useState } from "react";
import backOfCard from "./back.png";
import useFlip from "./hooks/useFlip";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipIsFacingUp] = useFlip();

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;


// // original code given
// function PlayingCard({ front, back = backOfCard }) {
//   const [isFacingUp, setIsFacingUp] = useState(true);
//   const flipCard = () => {
//     setIsFacingUp(isUp => !isUp);
//   };
//   return (
//     <img
//       src={isFacingUp ? front : back}
//       alt="playing card"
//       onClick={flipCard}
//       className="PlayingCard Card"
//     />
//   );
// }

// export default PlayingCard;
