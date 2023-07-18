import { useState, useEffect } from "react";
import "./BullsAndCowsStyles.scss";

const BullsAndCows = () => {
  const secretWords = [
    "apple",
    "watermelon",
    "orange",
    "pear",
    "cherry",
    "strawberry",
    "nectarine",
    "grape",
    "mango",
    "blueberry",
    "pomegranate",
    "carambola",
    "plum",
    "banana",
    "raspberry",
    "mandarin",
    "jackfruit",
    "papaya",
    "kiwi",
    "pineapple",
    "lime",
    "lemon",
    "apricot",
    "grapefruit",
    "melon",
    "coconut",
    "avocado",
    "peach",
  ];

  const [difficulty, setDifficulty] = useState("easy");
  const [secret, setSecret] = useState("");
  const [maxWrong, setMaxWrong] = useState(6);
  const [mistakes, setMistakes] = useState(0);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [showAndHide, setShowAndHide] = useState(true);

  useEffect(() => {
    const randomSecret =
      secretWords[Math.floor(Math.random() * secretWords.length)];
    setSecret(randomSecret);
  }, []);

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.id);
    switch (event.target.id) {
      case "easy":
        setMaxWrong(10);
        setSecret(secretWords[Math.floor(Math.random() * secretWords.length)]);
        break;
      case "medium":
        setMaxWrong(8);
        setSecret(secretWords[Math.floor(Math.random() * secretWords.length)]);
        break;
      case "hard":
        setMaxWrong(6);
        setSecret(secretWords[Math.floor(Math.random() * secretWords.length)]);
        break;
      default:
        setMaxWrong(10);
    }
  };

  const handleAddGuess = (event) => {
    event.preventDefault();
    const guess = event.target.nameField.value.toLowerCase();
    if (guess.length !== secret.length) {
      alert(`The word needs to be ${secret.length} letters long`);
      return;
    }

    if (guess === secret) {
      setResult("GOOD JOB!");
      setIsGameOver(true);
    } else {
      let bulls = 0;
      let cows = 0;
      for (let i = 0; i < guess.length; i++) {
        const currentLetter = guess[i];
        if (currentLetter === secret[i]) {
          bulls++;
        } else if (secret.includes(currentLetter)) {
          cows++;
        }
      }

      setMistakes((prevMistakes) => prevMistakes + 1);
      setResult(
        `${guess} - ${bulls} letters are on the right position, ${cows} letters are in the wrong position`
      );

      if (mistakes + 1 === maxWrong) {
        setResult("Game Over");
        setIsGameOver(true);
      }
    }

    setGuess("");
    event.target.nameField.value = "";
  };

  function display() {
    setShowAndHide(!showAndHide);
  }

  const startGame = () => {
    setIsGameOver(false);
    setMistakes(0);
    setResult("");
    setGuess("");
    setSecret(secretWords[Math.floor(Math.random() * secretWords.length)]);
  };

  return (
    <section className="game-container">
      {isGameOver ? (
        <div id="game-over">
          <h1>GAME OVER!</h1>
          <button onClick={startGame}>Play again</button>
        </div>
      ) : (
        <div className="game">
          <h1>Guess the fruit!</h1>
          <div className="big-block">
            <div id="container-level">
              <button
                id="easy"
                className={difficulty === "easy" ? "activeBtn" : ""}
                onClick={handleDifficultyChange}
              >
                Easy
              </button>
              <button
                id="medium"
                className={difficulty === "medium" ? "activeBtn" : ""}
                onClick={handleDifficultyChange}
              >
                Medium
              </button>
              <button
                id="hard"
                className={difficulty === "hard" ? "activeBtn" : ""}
                onClick={handleDifficultyChange}
              >
                Hard
              </button>
            </div>
            <p>The word is {secret.length} letters long</p>
            {/* <span>Du har</span>
          <span id="countdown"> </span>
          <span> sekunder på dig!</span>
          <div></div> */}
            <div>Wrong answers</div>
            <span id="mistakes">{mistakes}</span> <span>of</span>
            <span id="maxWrong"> {maxWrong}</span>
            <div>
              <button id="hidelist" onClick={display}>
                Show / Hide
              </button>
            </div>
            {showAndHide
              ? result && <p className="showAndHide-content">{result}</p>
              : null}
            <form id="addItem" onSubmit={handleAddGuess}>
              <input
                id="nameField"
                type="text"
                value={guess}
                onChange={(event) => setGuess(event.target.value)}
              />
              <button type="submit">Guess</button>
            </form>
            {isGameOver ? (
              <button onClick={startGame}>Play again</button>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
};

export default BullsAndCows;
