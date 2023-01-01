import React from 'react';
import {useRouter} from "next/router";

import {SActions, SHeader} from "./styles";
import {Button} from "../../buttons";
import {Logo} from "../../ui";
import {useAppSelector} from "../../../store/hooks";

export const Header = () => {
    const token = useAppSelector(({ user }) => user.token)
    const router = useRouter();

    return (
        <SHeader>
            <Logo />
            <SActions>
                <Button text='Cart' onClick={() => {}} />
                {' '}
                {token ? (
                    <Button text='Profile' onClick={() => {}} variant='outlined' />
                ) : (
                    <>
                        <Button text='Login' onClick={() => router.push('/login')} variant='outlined' />
                        {' '}
                        <Button text='Register' onClick={() => {}} variant='outlined' />
                    </>
                )}
            </SActions>
        </SHeader>
    )
}
