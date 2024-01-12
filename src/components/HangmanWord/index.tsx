import { WordWrapper,
        LetterStyling,
} from './styled';

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
}

export const HangmanWord = ({guessedLetters, wordToGuess}: HangmanWordProps) => {
    
  return (
    <WordWrapper>
      {wordToGuess.split("").map((letter, index) => (
        <LetterStyling key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
              ? "visible"
              : "hidden",
            }}
          >
            {letter}
          </span>
        </LetterStyling>
      ))}
    </WordWrapper>
  )
}
