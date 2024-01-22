import React from "react";
import Title from "../../../components/Title";
import './Question.css';
import Category from "./components/Category";
import { Button } from "antd";

export const QuestionPresenter = ({
    name
}) => {
    return(
        <div className="question-container">
            <div className="question-wrap">
                <div className="title">
                    {/* <Header /> */}
                    <Title title = {'상담 문의'} />
                </div>
                <div className="form">
                    <div className="question-detail">
                        <div className="img"></div>
                        <div className="info">
                            <Category category = {'진로'} />
                            <span>{name}</span>
                        </div>
                    </div>
                    <div className="question-info">
                        <div className="question-title">
                            <h3>문의 내용</h3>
                        </div>
                        <textarea cols={100} rows={20}></textarea>
                    </div>
                </div>
                <div className="button">
                    <Button>제출하기</Button>
                </div>
            </div>
        </div>
    )
}