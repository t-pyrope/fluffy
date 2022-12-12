import type { AppProps } from 'next/app'
import {ThemeProvider} from "styled-components";

import {Header} from "../components/layout";
import {lightTheme} from "../styles/light-theme";
import GlobalCSS from '../styles/global.css'
import {Store} from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Store>
          <ThemeProvider theme={lightTheme}>
              <GlobalCSS />
              <Header />
              <Component {...pageProps} />
          </ThemeProvider>
      </Store>
  )
}
