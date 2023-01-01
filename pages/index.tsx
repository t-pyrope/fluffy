import Head from 'next/head'
import {useEffect} from "react";
import {MainList} from "../components/lists";
import {wrapper} from "../store";
import {getProducts} from "../store/api";
import {useAppDispatch} from "../store/hooks";
import {ISimpleProduct} from "../models";
import {initProducts} from "../store/slices/products";

export default function Home({ products }: { products: ISimpleProduct[] }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initProducts(products));
    }, [])

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

export const getStaticProps = wrapper.getStaticProps(
    (store) => async () => {
        const res = await store.dispatch(getProducts.initiate());

        return {
            props: {
                products: res.data?.products ?? [],
            },
        }
    }
)
