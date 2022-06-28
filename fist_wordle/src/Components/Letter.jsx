import { useEffect, useState, useRef } from "react";

const Letter = ({
  setWord,
  word,
  index,
  wordtoGuess,
  guessNumber,
  wordNumber,
  currentRow,
  currentColumn,
  setCurrentColumn,
}) => {
  const [letter, setLetter] = useState("");
  const [correct, setCorrect] = useState(false);
  const [inWord, setInWord] = useState(false);

  const inputToFocus = useRef();

  const updateWord = (e) => {
    if (/^[a-zA-Z]+$/.test(e.target.value) || e.target.value === "") {
      const updatedWord = [...word];
      updatedWord[index] = e.target.value.toUpperCase();
      setLetter(e.target.value.toUpperCase());
      setWord(updatedWord);
      if (e.target.value !== "" && currentColumn <= 4) {
        setCurrentColumn(currentColumn + 1);
      }
    }
  };

  useEffect(() => {
    if (wordtoGuess[index] === letter) {
      setCorrect(true);
    }
    if (wordtoGuess[index] !== letter && wordtoGuess.includes(letter)) {
      setInWord(true);
    }
  }, [guessNumber]);

  useEffect(() => {
    if (currentRow === wordNumber && currentColumn === index + 1) {
      inputToFocus.current.focus();
    }
  }, [currentRow, currentColumn]);

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      if (!letter && currentColumn > 1) {
        setCurrentColumn(currentColumn - 1);
      }
    }
  };

  const handleClick = (e) => {
    setCurrentColumn(index + 1);
  };

  return (
    <>
      <input
        type="text"
        ref={inputToFocus}
        className={`letter-input ${correct === true ? "correct" : ""} ${
          inWord ? "in-word" : ""
        }`}
        value={letter}
        onChange={updateWord}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        maxLength={1}
        disabled={wordNumber !== guessNumber}
      />
    </>
  );
};

export default Letter;
