import styled from "styled-components";

export const DrawingWrapper = styled.div`
    position: relative;
`

export const Bottom = styled.div`
    height: 1rem;
    width: 16rem;
    background-color: black;
`

export const Vertical = styled.div`
    height: 25rem;
    width: 1rem;
    background-color: black;
    margin-left: 8rem;
`

export const Top = styled.div`
    height: 1rem;
    width: 14rem;
    background-color: black;
    margin-left: 8rem;
`

export const DropDown = styled.div`
    height: 3rem;
    width: 1rem;
    background-color: black;
    position: absolute;
    top: 0;
    right: 0;
`

export const HeadStyled = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    border: 0.5rem solid black;
    position: absolute;
    top: 3rem;
    right: -1.5rem;
`

export const BodyStyled = styled.div`
    width: 0.7rem;
    height: 6rem;
    position: absolute;
    top: 7rem;
    right: 0rem;
    background-color: black;
`

export const RightArmStyled = styled.div`
    width: 6rem;
    height: 0.4rem;
    position: absolute;
    top: 8rem;
    right: -5.4rem;
    background-color: black;
    transform: rotate(2.5rad);
`

export const LeftArmStyled = styled.div`
    width: 6rem;
    height: 0.4rem;
    position: absolute;
    top: 8rem;
    right: 0.08rem;
    background-color: black;
    transform: rotate(-2.5rad);
`

export const RightLegStyled = styled.div`
    width: 6rem;
    height: 0.5rem;
    position: absolute;
    top: 14.8rem;
    right: -4.4rem;
    background-color: black;
    transform: rotate(-2.1rad);
`

export const LeftLegStyled = styled.div`
    width: 6rem;
    height: 0.5rem;
    position: absolute;
    top: 14.8rem;
    right: -1rem;
    background-color: black;
    transform: rotate(2.1rad);
`