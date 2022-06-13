import { useEffect, useState } from "react";

const Letter = ({
  setWord,
  word,
  index,
  wordtoGuess,
  guessNumber,
  wordNumber,
}) => {
  const [letter, setLetter] = useState("");
  const [correct, setCorrect] = useState(false);
  const [inWord, setInWord] = useState(false);

  const updateWord = (e) => {
    const updatedWord = [...word];
    updatedWord[index] = e.target.value.toUpperCase();
    setLetter(e.target.value.toUpperCase());
    setWord(updatedWord);
  };

  useEffect(() => {
    if (wordtoGuess[index] === letter) {
      setCorrect(true);
    }
    if (wordtoGuess[index] !== letter && wordtoGuess.includes(letter)) {
      setInWord(true);
    }
  }, [guessNumber]);

  return (
    <>
      <input
        type="text"
        className={`letter-input ${correct === true ? "correct" : ""} ${
          inWord ? "in-word" : ""
        }`}
        value={letter}
        onChange={updateWord}
        maxLength={1}
        disabled={wordNumber !== guessNumber}
      />
    </>
  );
};

export default Letter;
