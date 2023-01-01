import Head from 'next/head'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Image from "next/image";

import {ISimpleProduct} from "../../models";
import {
    SProductContainer,
    SProductContent,
    SDescriptionItem,
    SDescriptionList,
    SPrice
} from "../../styles/pages/products";
import {Button} from "../../components/buttons";
import {useAppSelector} from "../../store/hooks";

export default function Product () {
    const [product, setProduct] = useState<ISimpleProduct | null>(null);
    const products = useAppSelector(({ products }) => products.products);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (!id) return;
        const newProduct = products.find((product) => product.id === id);
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
                <SProductContainer>
                    <Image src={product.src} alt={product.title} width={1000} height={1000} />
                    <SProductContent>
                        <h1>{product.title}</h1>
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
                    </SProductContent>
                </SProductContainer>
            </main>
        </div>
    )
}
