import React, {useState} from 'react';
import { GiFluffySwirl} from "react-icons/gi";

import {SActions, SHeader, SLogo} from "./styles";
import {useStoreContext} from "../../../store";
import {Button} from "../../buttons";
import {LoginModal} from "../../modals";

export const Header = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const { token } = useStoreContext();

    return (
        <SHeader>
            <SLogo>
                <GiFluffySwirl />
                {' '}
                Fluffy
            </SLogo>
            <SActions>
                <Button text='Cart' onClick={() => {}} />
                {' '}
                {token ? (
                    <Button text='Profile' onClick={() => {}} variant='outlined' />
                ) : (
                    <>
                        <Button text='Login' onClick={() => setLoginOpen(true)} variant='outlined' />
                        {' '}
                        <Button text='Register' onClick={() => {}} variant='outlined' />
                    </>
                )}
            </SActions>
            {loginOpen && <LoginModal setOpen={setLoginOpen} />}
        </SHeader>
    )
}
