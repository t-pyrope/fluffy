import React from 'react';
import Link from "next/link";
import Image from "next/image";

import {ISimpleProduct} from "../../../models";
import {SContainer} from "./styles";

export const ProductCard = ({ product }: {product: ISimpleProduct}) => {
    return (
        <Link href={`/products/${product.id}`}>
            <SContainer title={product.name}>
                <Image src={product.thumbnail} alt={product.name} />
            </SContainer>
        </Link>
    )
}
