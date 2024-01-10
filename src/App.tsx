import { useState } from "react";
import words from "./wordList.json";

function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    words[Math.floor(Math.random() * words.length)]
  });

  return (
    <h1>
      Hi
    </h1>
  )
}

export default App
