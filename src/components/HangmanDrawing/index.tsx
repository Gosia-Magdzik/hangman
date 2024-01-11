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

export const HangmanDrawing = () => {
  return (
    <DrawingWrapper>
        {Head}
        {Body}
        {RightArm}
        {LeftArm}
        {RightLeg}
        {LeftLeg}
      <DropDown/>
      <Top/>
      <Vertical/>
      <Bottom/>
    </DrawingWrapper>
  )
}
