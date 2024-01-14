import React from 'react'
import { KeyboardWrapper,
        Button,
} from './styled'
import { KEYS } from "./data"

type KEYBOARDPROPS = {
  activeLetter: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export const Keyboard = ( { activeLetter, inactiveLetters, addGuessedLetter } : KEYBOARDPROPS ) => {
  return (
    <KeyboardWrapper>
      {KEYS.map((key) => {
        return (
          <Button key={key}>
            {key}
          </Button>
        )
      })}
    </KeyboardWrapper>
  )
}
