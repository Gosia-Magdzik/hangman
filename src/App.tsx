import { useState } from "react";
import words from "./wordList.json";
import { Wrapper } from "./Styling/styled";

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return ( 
    <Wrapper>
      
    </Wrapper>
  );
  
}

export default App
