import { WordWrapper,
        LetterStyling,
} from './styled';

const word = "test";
const guessedLetter = ["t", "z"]

export const HangmanWord = () => {
  return (
    <WordWrapper>
      {word.split("").map((letter, index) => (
        <LetterStyling key={index}>
          <span
            style={{
              visibility: guessedLetter.includes(letter)
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
