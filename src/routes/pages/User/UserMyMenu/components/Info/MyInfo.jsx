import React from "react";
import { Info } from "./Info";
import { Link } from "react-router-dom";
import './MyInfo.css';

export const MyInfo = ({
    userInfo
}) => {
    return (
        <div className="mymenu-myinfo">
            {
                userInfo ? 
                    <>
                        <Info
                            notice='나의 이름'
                            info={userInfo.name}
                            gotoText='회원정보'
                            gotoLink='/user/profile'
                        />
                        <div className="divide" />
                        <Info
                            notice='나의 코인'
                            info={userInfo.total_coin}
                            gotoText='코인충전'
                            gotoLink='/user/coin'
                        /> 
                    </> :
                    <div className="mymenu-need-signin">
                        <span className="need-signin">로그인이 필요합니다</span>
                        <div className="mymenu-buttons">
                            <Link to='/signin'>로그인</Link>
                            <Link to='/user/signup'>회원가입</Link>
                        </div>
                    </div>
            }
        </div>
    )
}