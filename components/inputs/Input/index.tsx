import React from 'react';
import {SContainer, SInput, SLabel} from "./styles";

export const Input = ({
    value,
    onChange,
    label,
    type='text'
}: {
    value: string,
    onChange: (val: string) => void,
    label: string,
    type?: string,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }

    return (
        <SContainer>
            <SLabel>{label}</SLabel>
            <SInput type={type} value={value} onChange={handleChange} />
        </SContainer>
    )
}
