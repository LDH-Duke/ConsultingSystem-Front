import React from "react";
import Title from "../../../components/Title";
import './Product.css';

export const ProductPresenter = () => {
    return(
        <div className="product-container">
            <div className="product-wrap">
                <div className="title">
                    <Title title = "상품 등록" />
                </div>
            </div>
        </div>
    )
}