import React from 'react'
import { KeyboardWrapper,
        Button,
} from './styled'
import { KEYS } from "./data"

type KEYBOARDPROPS = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export const Keyboard = ( { activeLetters, inactiveLetters, addGuessedLetter } : KEYBOARDPROPS ) => {
  return (
    <KeyboardWrapper>
      {KEYS.map((key) => {

        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)

        return (
          <Button 
            key={key}
            onClick={() => addGuessedLetter(key)}
            className= {`${isActive ? 'active' : ""}
                        ${isInactive ? 'inactive' : ''}`}
            disabled={ isInactive || isActive }            
          >
            {key}
          </Button>
        )
      })}
    </KeyboardWrapper>
  )
}
