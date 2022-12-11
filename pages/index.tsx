import Head from 'next/head'
import {MainList} from "../components/lists";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fluffy</title>
        <meta name="description" content="Fluffy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <MainList />
      </main>
      <footer>
      </footer>
    </div>
  )
}
