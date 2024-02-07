import React from "react";
import './ProductList.css';

export const ProductListPresenter = ({
    products,
    onbuySubmit
}) => {
    return (
        <div>
            {
                products.map((product, index) => (
                    <div key={index}>
                        <p>상품 이름 : {product.name}</p>
                        <p>상품 가격 : {product.price}</p>
                        <p>상품 설명 : {product.explain}</p>
                        <button onClick={onbuySubmit}>상품 구매하기</button>
                    </div>
                ))
            }
        </div>
    )
}