import React from "react";
import "./MyIntro.css";

export const MyIntro = ({
    counselor,
    setCounselor,
    onSubmit
}) => {
    return(
        <div className="myintro-container">
            <div className="myintro-title">
                <h4>개인 공지 및 본인 소개 등록 및 수정</h4>
            </div>
            <div className="myintro-form">
                <div className="myintro-input">
                    <span>개인 공지</span>
                    <textarea 
                        value={counselor.notice}
                        onChange={(e) => {
                            const notice = e.target.value;
                            setCounselor(info => {
                                return {...info, notice}
                            })
                    }}
                    />
                </div>
                <div className="myintro-input">
                    <span>본인 소개</span>
                    <textarea
                        value={counselor.introduce}
                        onChange={(e) => {
                            const introduce = e.target.value;
                            setCounselor(info => {
                                return {...info, introduce}
                            })
                        }}
                    />
                </div>
                <div className="myintro-button">
                    <button onClick={onSubmit}>등록하기</button>
                </div>
            </div>
        </div>
    )
}