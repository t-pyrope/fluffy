import React, {useState} from 'react';
import {SModal, SModalContainer, STitle} from "../styles";
import {Input} from "../../inputs";
import {Button} from "../../buttons";

export const JoinModal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SModalContainer>
            <SModal>
                <form style={{ width: '360px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <STitle>Join</STitle>
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
                        <Button text='Join' onClick={() => {}} size='medium' />
                    </div>
                </form>
            </SModal>
        </SModalContainer>
    )
}
