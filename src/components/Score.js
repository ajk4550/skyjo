function Score({ hand }) {
  const calculateScore = () => {
    return hand
      .filter(({ isFlipped }) => isFlipped == true)
      .map(({ value }) => value)
      .reduce((acc, val) => acc + val, 0);
  };

  return <h1>Current Score: {calculateScore()}</h1>;
}

export default Score;
