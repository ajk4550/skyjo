import { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../styles/Hand.module.css";

function Hand({ reveal, hand }) {
  return (
    <div className={styles.hand}>
      {hand.map((card) => (
        <Card
          value={card.value}
          isFlipped={card.isFlipped}
          key={card.id}
          reveal={() => reveal(card.id)}
        />
      ))}
    </div>
  );
}

export default Hand;
