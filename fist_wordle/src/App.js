import Word from "./Components/Word";
import { useState } from "react";
import Keyboard from "./Components/Keyboard";
import Message from "./Components/Message";

import "./App.css";

function App() {
  const [word, setWord] = useState(["B", "L", "I", "N", "D"]);
  const [message, setMessage] = useState(
    "Brevity Term: No visual contact with FRIENDLY aircraft/ground position. Opposite of visual."
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
        />
        <Word
          guess={guessTwo}
          setGuess={setGuessTwo}
          wordtoGuess={word}
          guessNumber={guessNumber}
          wordNumber={2}
        />
        <Word
          guess={guessThree}
          setGuess={setGuessThree}
          wordtoGuess={word}
          guessNumber={guessNumber}
          wordNumber={3}
        />
        <Word
          guess={guessFour}
          setGuess={setGuessFour}
          wordtoGuess={word}
          guessNumber={guessNumber}
          wordNumber={4}
        />
        <Word
          guess={guessFive}
          setGuess={setGuessFive}
          wordtoGuess={word}
          guessNumber={guessNumber}
          wordNumber={5}
        />
        <Word
          guess={guessSix}
          setGuess={setGuessSix}
          wordtoGuess={word}
          guessNumber={guessNumber}
          wordNumber={6}
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
