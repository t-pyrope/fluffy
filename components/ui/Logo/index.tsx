import React from 'react';
import Link from "next/link";
import {GiFluffySwirl} from "react-icons/gi";
import {SLogo} from './styles';

export const Logo = () => {
    return (
        <SLogo>
            <Link href='/'>
                <GiFluffySwirl />
                {' '}
                Fluffy
            </Link>
        </SLogo>
    )
}
