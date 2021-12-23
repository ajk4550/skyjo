import { useState, useEffect } from "react";
import Hand from "./Hand";
import Score from "./Score";

function Game() {
  const [hand, setHand] = useState([]);

  useEffect(() => {
    loadDefault();
  }, []);

  const loadDefault = () => {
    const defaultHand = [];
    [...Array(12)].map((_, i) => {
      const newCard = {
        id: i,
        value: Math.floor(Math.random() * 15) - 2,
        isFlipped: false,
      };
      defaultHand.push(newCard);
    });

    setHand(defaultHand);
  };

  const revealCard = (id) => {
    let newState = [...hand];
    newState[id].isFlipped = true;
    setHand(newState);
  };

  return (
    <div>
      <Hand reveal={(id) => revealCard(id)} hand={hand} />
      <Score hand={hand} />
    </div>
  );
}

export default Game;
