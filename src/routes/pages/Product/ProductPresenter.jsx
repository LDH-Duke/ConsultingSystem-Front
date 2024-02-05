import React from "react";
import Title from "../../../components/Title";
import './Product.css';

export const ProductPresenter = ({
    setName,
    setPrice,
    setExplain,
    onSubmit
}) => {
    return(
        <div className="product-container">
            <div className="product-wrap">
                <div className="title">
                    <Title title = "상품 등록" />
                    <div className="product-form">
                        <div className="product-name">
                            <span>상품 이름</span>
                            <input type="text" onChange={(e) => {setName(e.target.value)}}/>
                        </div>
                        <div className="product-price" >
                            <span>상품 가격</span>
                            <input type="text" onChange={(e) => {setPrice(e.target.value)}}/>
                        </div>
                        <h4>상품 소개</h4>
                        <textarea onChange={(e) => {setExplain(e.target.value)}}/>
                        <button onClick={()=>{onSubmit()}}>상품등록하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}