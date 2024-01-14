import { WordWrapper,
        LetterStyling,
} from './styled';

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}

export const HangmanWord = ({
    guessedLetters, 
    wordToGuess,
    reveal = false,
  }: HangmanWordProps) => {
    
  return (
    <WordWrapper>
      {wordToGuess.split("").map((letter, index) => (
        <LetterStyling key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal
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
