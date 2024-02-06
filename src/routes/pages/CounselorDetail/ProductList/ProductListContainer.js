import React, { useEffect, useState } from "react";
import { API } from "../../../../api";
import { ProductListPresenter } from "./ProductListPresenter";
import { useParams } from "react-router-dom";

const ProductListContainer = () => {

    const [products, setProduct] = useState([]);
    const { counselor_id } = useParams();

    useEffect(() => {
        (async () => {
            const getProductinfo = await API.getcounselorproduct(counselor_id);
            setProduct(getProductinfo.data);
            
        })();
    }, [])

    const onbuySubmit = async () => {
        const postpuyproductinfo = await API.postbuyproduct();
      }

    return(
        <ProductListPresenter products = {products} onbuySubmit = {onbuySubmit}/>
    )

}

export default ProductListContainer;