import React from 'react';
import Head from "next/head";
import {LoginModal} from "../../components/modals";
import {Logo} from "../../components/ui";
import {SLoginContainer, SLogoContainer} from "../../styles/pages/login";

const Login = () => {
    return (
        <div>
            <Head>
                <title>Fluffy | Login</title>
            </Head>
            <SLoginContainer>
                <SLogoContainer>
                    <Logo />
                </SLogoContainer>
                <LoginModal />
            </SLoginContainer>
        </div>
    )
}

export default Login;
