import React from "react";
import "./PwInfo.css"

export const PwInfo = ({
    setCounselor,
    onSubmit
}) => {
    return(
        <div className="pwinfo-container">
            <div className="pwinfo-title">
                <h4>비밀번호 변경</h4>
            </div>
            <div className="pwinfo-form">
                <div className="pwinfo-input">
                    <span>현재 비밀번호</span>
                    <input type="text" placeholder="현재 비밀번호" />
                </div>
                <div className="pwinfo-input">
                    <span>새 비밀번호</span>
                    <input type="text" 
                        placeholder="새 비밀번호"
                        onChange={(e) => {
                            const pw = e.target.value
                            setCounselor(info => {
                                return {...info, pw};
                            })
                        }}
                    />
                </div>
                <div className="pwinfo-input">
                    <span>새 비밀번호 확인</span>
                    <input type="text" placeholder="새 비밀번호 확인" />
                </div>
                <div className="pwinfo-button">
                    <button onClick={onSubmit}>수정하기</button>
                </div>
            </div>
        </div>
    )
}