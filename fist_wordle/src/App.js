import Word from "./Components/Word";
import { useState } from "react";
import Keyboard from "./Components/Keyboard";
import Message from "./Components/Message";

import "./App.css";

function App() {
  const [word, setWord] = useState(["J", "O", "K", "E", "R"]);
  const [message, setMessage] = useState(
    "Brevity Term: Fuel state above BINGO at which separation or BUGOUT or event termination should begin."
  );
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [guessNumber, setGuessNumber] = useState(1);
  const [guessOne, setGuessOne] = useState([]);
  const [guessTwo, setGuessTwo] = useState([]);
  const [guessThree, setGuessThree] = useState([]);
  const [guessFour, setGuessFour] = useState([]);
  const [guessFive, setGuessFive] = useState([]);
  const [guessSix, setGuessSix] = useState([]);
  const [solved, setSolved] = useState(false);
  const [currentRow, setCurrentRow] = useState(1);
  const [currentColumn, setCurrentColumn] = useState(1);

  const onSubmit = () => {
    let currentWordGuess = 1;
    if (guessNumber === 1) {
      currentWordGuess = guessOne;
      setCurrentGuess(guessOne);
    } else if (guessNumber === 2) {
      currentWordGuess = guessTwo;
      setCurrentGuess(guessTwo);
    } else if (guessNumber === 3) {
      currentWordGuess = guessThree;
      setCurrentGuess(guessThree);
    } else if (guessNumber === 4) {
      currentWordGuess = guessFour;
      setCurrentGuess(guessFour);
    } else if (guessNumber === 5) {
      currentWordGuess = guessFive;
      setCurrentGuess(guessFive);
    } else {
      currentWordGuess = guessSix;
      setCurrentGuess(guessSix);
    }
    if (currentWordGuess.length === 5 && !currentWordGuess.includes("")) {
      const updatedGuessedLetters = [...guessedLetters, ...currentWordGuess];
      setGuessedLetters(updatedGuessedLetters);
      setGuessNumber(guessNumber + 1);
      if (currentRow < 6) {
        setCurrentRow(currentRow + 1);
      }
      setCurrentColumn(1);
    }

    let numberCorrect = 0;
    for (let i = 0; i < currentWordGuess.length; i++) {
      if (currentWordGuess[i] == word[i]) {
        numberCorrect += 1;
      }
    }
    if (numberCorrect === 5) {
      setSolved(true);
    }
  };

  return (
    <div className="App">
      <h1 className="page-title">FIST WORDLE</h1>
      <main className="main-content">
        <Word
          guess={guessOne}
          setGuess={setGuessOne}
          wordtoGuess={word}
          guessNumber={guessNumber}
          wordNumber={1}
          currentRow={currentRow}
          currentColumn={currentColumn}
          setCurrentColumn={setCurrentColumn}
        />
        <Word
          guess={guessTwo}
          setGuess={setGuessTwo}
          wordtoGuess={word}
          guessNumber={guessNumber}
          wordNumber={2}
          currentRow={currentRow}
          currentColumn={currentColumn}
          setCurrentColumn={setCurrentColumn}
        />
        <Word
          guess={guessThree}
          setGuess={setGuessThree}
          wordtoGuess={word}
          guessNumber={guessNumber}
          wordNumber={3}
          currentRow={currentRow}
          currentColumn={currentColumn}
          setCurrentColumn={setCurrentColumn}
        />
        <Word
          guess={guessFour}
          setGuess={setGuessFour}
          wordtoGuess={word}
          guessNumber={guessNumber}
          wordNumber={4}
          currentRow={currentRow}
          currentColumn={currentColumn}
          setCurrentColumn={setCurrentColumn}
        />
        <Word
          guess={guessFive}
          setGuess={setGuessFive}
          wordtoGuess={word}
          guessNumber={guessNumber}
          wordNumber={5}
          currentRow={currentRow}
          currentColumn={currentColumn}
          setCurrentColumn={setCurrentColumn}
        />
        <Word
          guess={guessSix}
          setGuess={setGuessSix}
          wordtoGuess={word}
          guessNumber={guessNumber}
          wordNumber={6}
          currentRow={currentRow}
          currentColumn={currentColumn}
          setCurrentColumn={setCurrentColumn}
        />
        <button className="submit-button" onClick={onSubmit}>
          SUBMIT
        </button>

        {solved && <Message message={message} />}
        {!solved && (
          <Keyboard
            guessedLetters={guessedLetters}
            word={word}
            currentGuess={currentGuess}
          />
        )}
      </main>
    </div>
  );
}

export default App;
