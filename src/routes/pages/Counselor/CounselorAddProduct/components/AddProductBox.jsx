import React from "react";
import { InputComponent } from '../../../../../components/Layout/Input/InputComponent';
import { Button, Input } from "antd";
import './AddProductBox.css';

export const AddProductBox = ({
    productInfo,
    setProductInfo,

    addProduct
}) => {
    return (
        <div className="add-product-box">
            <span className="title">상품 등록</span>
            <div className="product-list">
                <div className="product-list-item">
                    <span>상품 이름</span>
                    <span>
                        <InputComponent
                            placeholder='상품 이름을 작성하세요'
                            value={productInfo.name}
                            onChange={(e) => {
                                const name = e.target.value;
                                setProductInfo(info => {
                                    return {...info, name};
                                });
                            }}
                        />
                    </span>
                </div>
                <div className="product-list-item">
                    <span>상품 가격</span>
                    <span>
                        <InputComponent
                            type='number'
                            placeholder='상품 가격을 입력하세요'
                            value={productInfo.price}
                            onChange={(e) => {
                                const price = e.target.value;
                                setProductInfo(info => {
                                    return {...info, price};
                                });
                            }}
                        />
                    </span>
                </div>
                <div className="product-list-item">
                    <span>상품 소개</span>
                    <span>
                        <Input.TextArea
                            rows={4}
                            value={productInfo.explain}
                            onChange={(e) => {
                                const explain = e.target.value;
                                setProductInfo(info => {
                                    return {...info, explain};
                                });
                            }}
                        />
                    </span>
                </div>
                <div className="product-list-item">
                    <Button onClick={addProduct}>
                        상품 등록하기
                    </Button>
                </div>
            </div>
        </div>
    )
}