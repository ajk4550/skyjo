import React, { useState } from "react";
import styles from "../styles/Card.module.css";

function Card({ value, isFlipped, reveal }) {
  const cardColor = () => {
    if (value < 0) {
      return "#2b2cd9";
    } else if (value == 0) {
      return "#55e1ff";
    } else if (value <= 4) {
      return "#a5dc2d";
    } else if (value <= 8) {
      return "#fef71c";
    } else if (value <= 12) {
      return "#fe2932";
    } else {
      // Default case: Shouldn't reach
      return "#8198af";
    }
  };

  const renderCard = () => {
    if (isFlipped) {
      return (
        <div className={styles.card} style={{ backgroundColor: cardColor() }}>
          <span className={styles.value}>{value}</span>
        </div>
      );
    } else {
      return (
        <div
          className={`${styles.card} ${styles.unflippedCard}`}
          onClick={reveal}
        >
          <span className={styles.cardLogo}>Skyjo</span>
        </div>
      );
    }
  };

  return <React.Fragment>{renderCard()}</React.Fragment>;
}

export default Card;
