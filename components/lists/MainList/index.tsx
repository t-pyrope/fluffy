import React from 'react';
import {ProductCard} from "../../cards";
import {SProductContainer} from "./styles";
import {useAppSelector} from "../../../store/hooks";

export const MainList = () => {
    const products = useAppSelector(({ products }) => products.products);

    return (
        <div>
            <h1>Main products</h1>
            <SProductContainer>
                {Boolean(products.length) && (
                    <>
                        <SProductContainer>
                            {products.slice(1).map((product) => (
                                <ProductCard key={product.id} product={product}/>
                            ))}
                        </SProductContainer>
                        <ProductCard product={products[0]}/>
                    </>
                )}
            </SProductContainer>
        </div>
    )
}
