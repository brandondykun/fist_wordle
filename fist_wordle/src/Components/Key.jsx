import { useEffect, useState } from "react";

const Key = ({
  letter,
  guessedLetters,
  word,
  currentGuess,
  correctLetters,
  setCorrectLetters,
  wrongPlaceLetters,
  setWrongPlaceLetters,
  notInWordLetters,
  setNotInWordLetters,
}) => {
  const [derivedClassName, setDerivedClassName] = useState("");

  useEffect(() => {
    const letterCorrect =
      guessedLetters.includes(letter) &&
      currentGuess.includes(letter) &&
      word.indexOf(letter) === currentGuess.indexOf(letter);

    const letterInWrongPlace =
      guessedLetters.includes(letter) &&
      word.indexOf(letter) !== currentGuess.indexOf(letter) &&
      word.includes(letter);

    const notInWord = guessedLetters.includes(letter) && !word.includes(letter);

    const derivedClassName = () => {
      if (letterCorrect) {
        return "green-key";
      } else if (letterInWrongPlace) {
        return "yellow-key";
      } else if (notInWord) {
        return "grey-key";
      } else {
        return "";
      }
    };
    setDerivedClassName(derivedClassName());
  }, [guessedLetters, currentGuess]);

  return (
    <div className={`key ${derivedClassName}`}>
      <span>{letter}</span>
    </div>
  );
};

export default Key;
