import Key from "./Key";

const Keyboard = ({ guessedLetters, word, currentGuess }) => {
  const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middleRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomRow = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="row">
        {topRow.map((letter) => {
          return (
            <Key
              letter={letter}
              guessedLetters={guessedLetters}
              word={word}
              currentGuess={currentGuess}
            />
          );
        })}
      </div>
      <div className="row">
        {middleRow.map((letter) => {
          return (
            <Key
              letter={letter}
              guessedLetters={guessedLetters}
              word={word}
              currentGuess={currentGuess}
            />
          );
        })}
      </div>
      <div className="row">
        {bottomRow.map((letter) => {
          return (
            <Key
              letter={letter}
              guessedLetters={guessedLetters}
              word={word}
              currentGuess={currentGuess}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
