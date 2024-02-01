import React from "react";
import './style/Info.css';

const Info = (props) => {
    const {title, introduce, setNotice, onSubmit} = props

    return(
        <div className="info-container">        
            <h3>{title}</h3>
            <textarea 
            placeholder={`${introduce}를 작성해주세요`}
            onChange = {(e) => {setNotice(e.target.value)}}
            />
            <button>작성취소</button>
            <button  onClick={onSubmit}>작성완료</button>
        </div>
    )
}

export default Info