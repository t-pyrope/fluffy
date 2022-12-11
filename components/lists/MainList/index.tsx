import React from 'react';
import {productList} from "../../../public/mock";
import {ProductCard} from "../../cards";
import {SProductContainer} from "./styles";

export const MainList = () => {
    return (
        <div>
            <h1>Main products</h1>
            <SProductContainer>
                <SProductContainer>
                    {productList.slice(1).map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </SProductContainer>
                <ProductCard product={productList[0]}/>
            </SProductContainer>
        </div>
    )
}
