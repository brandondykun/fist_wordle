import Letter from "./Letter";

const Word = ({
  guess,
  setGuess,
  wordtoGuess,
  guessNumber,
  wordNumber,
  currentRow,
  currentColumn,
  setCurrentColumn,
}) => {
  return (
    <div>
      <Letter
        setWord={setGuess}
        word={guess}
        index={0}
        wordtoGuess={wordtoGuess}
        guessNumber={guessNumber}
        wordNumber={wordNumber}
        currentRow={currentRow}
        currentColumn={currentColumn}
        setCurrentColumn={setCurrentColumn}
      />
      <Letter
        setWord={setGuess}
        word={guess}
        index={1}
        wordtoGuess={wordtoGuess}
        guessNumber={guessNumber}
        wordNumber={wordNumber}
        currentRow={currentRow}
        currentColumn={currentColumn}
        setCurrentColumn={setCurrentColumn}
      />
      <Letter
        setWord={setGuess}
        word={guess}
        index={2}
        wordtoGuess={wordtoGuess}
        guessNumber={guessNumber}
        wordNumber={wordNumber}
        currentRow={currentRow}
        currentColumn={currentColumn}
        setCurrentColumn={setCurrentColumn}
      />
      <Letter
        setWord={setGuess}
        word={guess}
        index={3}
        wordtoGuess={wordtoGuess}
        guessNumber={guessNumber}
        wordNumber={wordNumber}
        currentRow={currentRow}
        currentColumn={currentColumn}
        setCurrentColumn={setCurrentColumn}
      />
      <Letter
        setWord={setGuess}
        word={guess}
        index={4}
        wordtoGuess={wordtoGuess}
        guessNumber={guessNumber}
        wordNumber={wordNumber}
        currentRow={currentRow}
        currentColumn={currentColumn}
        setCurrentColumn={setCurrentColumn}
      />
    </div>
  );
};

export default Word;
