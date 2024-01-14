import { useEffect, useState, useCallback } from "react";
import words from "./wordList.json";
import { MainWrapper, 
        Wrapper,
        GridKeyboard,
        InfoStyled,
} from "./Styling/styled";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser])



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

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key
      if (key !== "Enter") return

      event.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  },[])

  return ( 
    <MainWrapper>
      <Wrapper>
        <InfoStyled>
          { isWinner && "WINNER! refresh to try again" }
          { isLoser && "NICE TRY! refresh to try again " }
        </InfoStyled>
        <HangmanDrawing 
          numberOfGuessed={incorrectLetters.length}/>
        <HangmanWord 
          guessedLetters={guessedLetters} 
          wordToGuess={wordToGuess}
          reveal={isLoser}
        />
        <GridKeyboard>
          <Keyboard
            disabled={isWinner || isLoser} 
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
