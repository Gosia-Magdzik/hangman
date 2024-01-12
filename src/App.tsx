import { useState } from "react";
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

  return ( 
    <MainWrapper>
      <Wrapper>
        <Info/>
        <HangmanDrawing numberOfGuessed={incorrectLetters.length}/>
        <HangmanWord/>
        <GridKeyboard>
          <Keyboard/>
        </GridKeyboard>
      </Wrapper>
    </MainWrapper>
  );
  
}

export default App
