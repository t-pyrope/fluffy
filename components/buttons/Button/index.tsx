import React from 'react';
import {SButton} from "./styles";

export const Button = ({ text, onClick, variant='contained', size='small' }: {
    text: string,
    onClick: () => void,
    variant?: 'contained' | 'outlined',
    size?: 'small' | 'medium'
}) => {
    return (
        <SButton
            onClick={onClick}
            variant={variant}
            size={size}
        >
            {text}
        </SButton>
    )
}
