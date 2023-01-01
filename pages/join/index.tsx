import Head from "next/head";

import {SLoginContainer, SLogoContainer} from "../../styles/pages/login";
import {Logo} from "../../components/ui";

const Join = () => {
    return (
        <div>
            <Head>
                <title>Fluffy | Join</title>
            </Head>
            <SLoginContainer>
                <SLogoContainer>
                    <Logo />
                </SLogoContainer>
            </SLoginContainer>
        </div>
    )
}

export default Join;
