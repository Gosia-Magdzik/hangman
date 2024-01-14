import styled from "styled-components";

export const KeyboardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
    gap: .5rem;
`

export const Button = styled.button`
    padding: .5rem;
    font-size: 2rem;
    background-color: #bbd09f;
    align-items: center;
    border: none;
    aspect-ratio: 1/1;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.2s;
    border-radius: 5px;

    &:hover:not(:disabled), 
    :focus:not(:disabled) {
        background-color: #a0b97f;
        transform: scale(0.97);
    }

    &.active {
        background-color: #7A95C2;
        transform: scale(1.05);
    }

    
    &.inactive {
        opacity: .5;
        transform: scale(.90);
    }



`