import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
    <div>
        <span>존재하지 않는 페이지 입니다.</span>
        <div><Link to='/'><span>메인화면으로</span></Link></div>
    </div>
    )
}

export default Error;