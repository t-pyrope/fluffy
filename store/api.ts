import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import {HYDRATE} from "next-redux-wrapper";
import {ISimpleProduct} from "../models";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    }),
    tagTypes: [],
    extractRehydrationInfo(action, { reducerPath }) {
        if(action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (builder) => ({
        getProducts: builder.query<{ products: Array<ISimpleProduct> }, void>({
            query: () => '/products'
        })
    })
})

export const { getProducts } = api.endpoints;
