import React from 'react';
import {SSocialButton} from "./styles";
import Image from "next/image";

export const SocialButton = ({ iconSrc, text }: { iconSrc: string, text: string }) => {
    return (
        <SSocialButton>
            <Image src={iconSrc} alt='' width={20} height={20} />
            {text}
        </SSocialButton>
    )
}
