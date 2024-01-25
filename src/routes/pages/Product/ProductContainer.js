import { ProductPresenter } from "./ProductPresenter";
import API from "../../../api/API";
import { useState } from "react";
import cookie from "../../../cookie";

const ProductContainer = () => {

    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [explain, setExplain] = useState()

    const onSubmit = async() => {
        const counselor_id = cookie.getCookie('id');

        const body = {
            name,
            price,
            explain
        }

        const postProductinfo = await API.postProduct(counselor_id, body);
        console.log(postProductinfo)
    }

    return(
        <ProductPresenter onSubmit = {onSubmit} setName={setName} setPrice={setPrice} setExplain={setExplain}/>
    )
}

export default ProductContainer;