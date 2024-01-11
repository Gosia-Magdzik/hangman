import React from 'react'
import { KeyboardWrapper,
        Button,
} from './styled'

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

export const Keyboard = () => {
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
