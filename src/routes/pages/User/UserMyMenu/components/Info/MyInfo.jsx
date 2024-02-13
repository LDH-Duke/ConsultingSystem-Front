import React from "react";
import { Info } from "./Info";
import { Link } from "react-router-dom";
import './MyInfo.css';

export const MyInfo = ({
    userInfo
}) => {
    return (
        <div className="mymenu-user">
            <div className="user-info">
                <div className="user-img">
                    <img src="" alt="이미지" />
                </div>
                <div className="user-name">
                    <span>홍길동</span>
                    <span>ehdgml506@naver.com</span>
                </div>
            </div>

            <ul className="myhistory-user">
                <li className="myhistory-tab">
                    <span>상담</span>
                    <span>20</span>
                </li>
                <li className="myhistory-tab">
                    <span>예약</span>
                    <span>2</span>
                </li>
                <li className="myhistory-tab">
                    <span>코인</span>
                    <span>2000</span>
                </li>
            </ul>
        </div>
        // <div className="mymenu-myinfo">
        //     {
        //         userInfo ?
        //             <>
        //                 <div >

        //                 </div>
        //                 {/* <Info
        //                     notice='나의 이름'
        //                     info={userInfo.name}
        //                     gotoText='회원정보'
        //                     gotoLink='/user/profile'
        //                 />
        //                 <div className="divide" />
        //                 <Info
        //                     notice='나의 코인'
        //                     info={userInfo.total_coin}
        //                     gotoText='코인충전'
        //                     gotoLink='/user/coin'
        //                 />  */}
        //             </> :
        //             <div className="mymenu-need-signin">
        //                 <span className="need-signin">로그인이 필요합니다</span>
        //                 <div className="mymenu-buttons">
        //                     <Link to='/signin'>로그인</Link>
        //                     <Link to='/user/signup'>회원가입</Link>
        //                 </div>
        //             </div>
        //     }
        // </div>
    )
}