import React, {useState} from 'react';
import {SModal, SModalContainer, SSubtitle, STitle} from "../styles";
import {Input} from "../../inputs";
import {Button, SocialButton} from "../../buttons";

// TODO: CloseButton
export const LoginModal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SModalContainer>
            <SModal>
                <form style={{ width: '360px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <STitle>Sign in</STitle>
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
                        <Button text='Login' onClick={() => {}} size='medium' />
                    </div>
                </form>
                <SSubtitle>Or sign in using social media</SSubtitle>
                <div style={{ display: 'grid', gridGap: '1rem' }}>
                    <SocialButton iconSrc='/img/icons/google.png' text='Google' />
                    <SocialButton iconSrc='/img/icons/facebook.png' text='Facebook' />
                </div>
            </SModal>
        </SModalContainer>
    )
}
