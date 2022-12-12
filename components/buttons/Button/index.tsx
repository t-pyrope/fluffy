import React from 'react';
import {SButton} from "./styles";

export const Button = ({ text, onClick, variant='contained' }: {
    text: string,
    onClick: () => void,
    variant?: 'contained' | 'outlined'
}) => {
    return (
        <SButton onClick={onClick} variant={variant}>{text}</SButton>
    )
}
