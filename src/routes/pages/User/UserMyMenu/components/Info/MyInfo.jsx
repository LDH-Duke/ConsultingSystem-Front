import React from "react";
import { Info } from "./Info";
import './MyInfo.css';

export const MyInfo = () => {
    return (
        <div className="mymenu-myinfo">
            <Info
                notice='나의 닉네임'
                info='닉네임 추가'
                gotoText='회원정보'
                gotoLink='/user/profile'
            />
            <div className="divide" />
            <Info
                notice='나의 코인'
                info='11,000'
                gotoText='코인충전'
                gotoLink='/user/coin'
            />
        </div>
    )
}