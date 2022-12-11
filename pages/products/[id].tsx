import Head from 'next/head'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {ISimpleProduct} from "../../models";
import {productList} from "../../public/mock";
import {SContainer, SContent, SDescriptionItem, SDescriptionList, SPrice} from "./styles";
import {Button} from "../../components/buttons";

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
                                <SDescriptionList>
                                    {product.description.map((desc) => (
                                        <SDescriptionItem key={desc}>{desc}</SDescriptionItem>
                                    ))}
                                </SDescriptionList>
                            ): ' no description'}
                        </div>
                        <div>
                            <Button text='Add to cart' onClick={() => {}} />
                        </div>
                    </SContent>
                </SContainer>
            </main>
        </div>
    )
}
