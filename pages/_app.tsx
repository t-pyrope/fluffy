import type { AppProps } from 'next/app'
import {ThemeProvider} from "styled-components";
import {useRouter} from "next/router";

import {Header} from "../components/layout";
import {lightTheme} from "../styles/light-theme";
import GlobalCSS from '../styles/global.css'
import {wrapper} from "../store";

export function App({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter();
    const hasHeader = !['/login'].includes(pathname)

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalCSS />
            {hasHeader && <Header />}
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default wrapper.withRedux(App)
