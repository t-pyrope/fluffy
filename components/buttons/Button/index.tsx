import React from 'react';
import {SButton} from "./styles";

export const Button = ({ text, onClick }: {
    text: string,
    onClick: () => void,
}) => {
    return (
        <SButton onClick={onClick} >{text}</SButton>
    )
}
