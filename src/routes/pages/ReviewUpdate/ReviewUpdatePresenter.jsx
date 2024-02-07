import React from "react";
import Title from "../../../components/Title";
import './ReviewUpdate.css';
import Category from "./components/Category";
import { Button } from "antd";

export const ReviewUpdatePresenter = ({
    name
}) => {

    return(
        <div className="reviewupdate-container">
            <div className="reviewupdate-wrap">
                <div className="title">
                    <Title title = {'리뷰 수정'} />
                </div>
                <div className="form">
                    <div className="reviewupdate-detail">
                        <div className="img"></div>
                        <div className="info">
                            <Category category = {'진로'} />
                            <span>{name}</span>
                        </div>
                    </div>
                    <div className="reviewupdate-info">
                        <div className="reviewupdate-title">
                            <h3>리뷰 내용</h3>
                        </div>
                        <textarea cols={100} rows={20}></textarea>
                    </div>
                </div>
                <div className="button">
                    <Button>취소</Button>
                </div>
            </div>
        </div>
    )
}