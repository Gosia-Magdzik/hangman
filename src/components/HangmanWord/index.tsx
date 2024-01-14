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
              color: !guessedLetters.includes(letter) && reveal 
                ? "#ce5b5b" 
                : "black"
            }}
          >
            {letter}
          </span>
        </LetterStyling>
      ))}
    </WordWrapper>
  )
}
