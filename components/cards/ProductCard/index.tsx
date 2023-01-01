import React from 'react';
import Link from "next/link";
import Image from "next/image";

import {ISimpleProduct} from "../../../models";
import {SContainer} from "./styles";

export const ProductCard = ({ product }: {product: ISimpleProduct}) => {
    const thumbnail = `${process.env.NEXT_PUBLIC_BASE_URL}${product.src}`;

    return (
        <Link href={`/products/${product.id}`}>
            <SContainer title={product.title}>
                <Image src={thumbnail} alt={product.title} width={1000} height={1000} />
            </SContainer>
        </Link>
    )
}
