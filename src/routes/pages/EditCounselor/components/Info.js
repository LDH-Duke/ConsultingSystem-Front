import React from "react";
import './style/Info.css';

const Info = props => {
    const {title, introduce} = props

    return(
        <div className="info-container">        
            <h3>{title}</h3>
            <textarea placeholder={`${introduce}를 작성해주세요`}/>
            <button>작성취소</button>
            <button>작성완료</button>
        </div>
    )
}

export default Info