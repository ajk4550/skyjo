import { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../styles/Hand.module.css";

function Hand() {
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
    <div className={styles.hand}>
      {hand.map((card) => (
        <Card
          value={card.value}
          isFlipped={card.isFlipped}
          key={card.id}
          reveal={() => revealCard(card.id)}
        />
      ))}
    </div>
  );
}

export default Hand;
