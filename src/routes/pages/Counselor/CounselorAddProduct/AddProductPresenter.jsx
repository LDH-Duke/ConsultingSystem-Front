import React, { useEffect } from "react";
import './AddProduct.css';
import Layout from '../../../../components/Layout/Layout';
import { AddProductBox } from "./components/AddProductBox";

export const AddProductPresenter = ({
    productInfo,
    setProductInfo,

    addProduct
}) => {
    return (
        <Layout nav={1}>
            <AddProductBox
                productInfo={productInfo}
                setProductInfo={setProductInfo}
                addProduct={addProduct}
            />
        </Layout>
    )
}