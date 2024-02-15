import React from "react";
import "./Ask.css";
import { Button } from "../../../../../components/Layout/Button/Button";

export const Ask = ({
    setContent,

    onSubmit
}) => {
    return(
        <div className="ask-container">
            <div className="ask-wrap">
                <div className="ask-info">
                    <h3>무슨 일이신가요?</h3>
                    <span>문의하고 싶은 내용을 입력해주세요.</span>
                </div>
                <div className="ask-form">
                    <div className="ask-ul">
                        <ul>    
                            <li>문의하기</li>
                        </ul>  
                    </div>
                    <div className="ask-text">
                        <textarea onChange={(e) => {setContent(e.target.value)}}
                        placeholder="가슴은 뜨겁게, 문의는 솔직하게 작성해주세요."
                        rows={20}
                        />
                    </div>
                </div>
                <div className="ask-button">
                    <Button title={'작성하기'} onClick={onSubmit}></Button>
                </div>
            </div>
        </div>
    )
}