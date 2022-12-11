import React from 'react';
import { GiFluffySwirl} from "react-icons/gi";

import {SActions, SHeader, SLogo} from "./styles";

export const Header = () => {
    return (
        <SHeader>
            <SLogo>
                <GiFluffySwirl />
                {' '}
                Fluffy
            </SLogo>
            <SActions>
                Cart
                {' '}
                Profile
            </SActions>

        </SHeader>
    )
}
