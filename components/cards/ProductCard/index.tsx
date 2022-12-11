import React from 'react';
import {ISimpleProduct} from "../../../models";
import {SContainer} from "./styles";
import Link from "next/link";

export const ProductCard = ({ product }: {product: ISimpleProduct}) => {
    return (
        <Link href={`/products/${product.id}`}>
            <SContainer title={product.name}>
                <img src={product.thumbnail} alt={product.name} />
            </SContainer>
        </Link>
    )
}
