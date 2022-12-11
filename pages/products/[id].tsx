import Head from 'next/head'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ISimpleProduct} from "../../models";
import {productList} from "../../public/mock";
import {SContainer, SContent, SPrice} from "./styles";


export default function Product () {
    const [product, setProduct] = useState<ISimpleProduct | null>(null);
    const router = useRouter();
    const { id } = router.query;

    console.log("ROUTERR id", id);

    useEffect(() => {
        if (!id) return;
        const newProduct = productList.find((product) => product.id === id);
        if (newProduct) {
            setProduct(newProduct);
        }
    }, [id])

    if (!product) return null;
    return (
        <div>
            <Head>
                <title>Product</title>
            </Head>

            <main style={{ display: 'flex', justifyContent: 'center' }}>
                <SContainer>
                    <img src={product.url} alt={product.name} />
                    <SContent>
                        <h1>{product.name}</h1>
                        <SPrice>${product.price}</SPrice>
                        <div>
                            Description:
                            {product.description ? (
                                <ul>
                                    {product.description.map((desc) => (
                                        <li key={desc}>{desc}</li>
                                    ))}
                                </ul>
                            ): ' no description'}
                        </div>
                        <button>Add to cart</button>
                    </SContent>
                </SContainer>
            </main>
        </div>
    )
}
