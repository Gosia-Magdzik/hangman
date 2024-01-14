import { useEffect, useState, useCallback } from "react";
import words from "./wordList.json";
import { MainWrapper, 
        Wrapper,
        GridKeyboard
} from "./Styling/styled";
import { Info } from "./components/Info";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter)) return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters])



  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key
      if (!key.match(/^[a-z]$/)) return

      event.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }

  }, [guessedLetters])

  return ( 
    <MainWrapper>
      <Wrapper>
        <Info/>
        <HangmanDrawing numberOfGuessed={incorrectLetters.length}/>
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
        <GridKeyboard>
          <Keyboard 
            activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </GridKeyboard>
      </Wrapper>
    </MainWrapper>
  );
  
}

export default App
