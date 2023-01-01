import React, {useState} from 'react';
import {SModal, SModalContainer, STitle} from "../styles";
import {Input} from "../../inputs";
import {Button} from "../../buttons";

// TODO: CloseButton
export const LoginModal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SModalContainer>
            <SModal>
                <form style={{ width: '360px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <STitle>Login</STitle>
                        <Input
                            value={email}
                            label='Email'
                            onChange={(val) => setEmail(val)}
                            type='email'
                        />
                        <Input
                            value={password}
                            onChange={(val) => setPassword(val)}
                            label='Password'
                            type='password'
                        />
                        <Button text='Login' onClick={() => {}} />
                    </div>
                </form>
            </SModal>
        </SModalContainer>
    )
}
