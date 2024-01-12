import React from 'react'
import { Bottom, 
  DrawingWrapper,
  Vertical, 
  Top,
  DropDown,
  HeadStyled,
  BodyStyled,
  RightArmStyled,
  LeftArmStyled,
  RightLegStyled,
  LeftLegStyled
} from './styled';

const Head = <HeadStyled/>
const Body = <BodyStyled/>
const RightArm = <RightArmStyled/>
const LeftArm = <LeftArmStyled/>
const RightLeg = <RightLegStyled/>
const LeftLeg = <LeftLegStyled/>

type HangmanDrawingProps {
  numberOfGuessed: number
}

const Body_Parts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg]

export const HangmanDrawing = ({ numberOfGuessed }: HangmanDrawingProps) => {
  return (
    <DrawingWrapper>
        {Body_Parts.slice(0, numberOfGuessed)}
      <DropDown/>
      <Top/>
      <Vertical/>
      <Bottom/>
    </DrawingWrapper>
  )
}
