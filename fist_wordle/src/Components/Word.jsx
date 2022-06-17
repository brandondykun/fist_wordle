import Letter from "./Letter";

const Word = ({ guess, setGuess, wordtoGuess, guessNumber, wordNumber }) => {
  return (
    <div>
      <Letter
        setWord={setGuess}
        word={guess}
        index={0}
        wordtoGuess={wordtoGuess}
        guessNumber={guessNumber}
        wordNumber={wordNumber}
      />
      <Letter
        setWord={setGuess}
        word={guess}
        index={1}
        wordtoGuess={wordtoGuess}
        guessNumber={guessNumber}
        wordNumber={wordNumber}
      />
      <Letter
        setWord={setGuess}
        word={guess}
        index={2}
        wordtoGuess={wordtoGuess}
        guessNumber={guessNumber}
        wordNumber={wordNumber}
      />
      <Letter
        setWord={setGuess}
        word={guess}
        index={3}
        wordtoGuess={wordtoGuess}
        guessNumber={guessNumber}
        wordNumber={wordNumber}
      />
      <Letter
        setWord={setGuess}
        word={guess}
        index={4}
        wordtoGuess={wordtoGuess}
        guessNumber={guessNumber}
        wordNumber={wordNumber}
      />
    </div>
  );
};

export default Word;
