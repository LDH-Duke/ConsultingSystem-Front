import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Counselor.css"
import { Switch, Button} from "antd";
import MultipleItems from "./components/MultipleItems";
import Calendar_form from "./components/Calendar";
import SubHeader from "../../../components/SubHeader";


export const CounselorPresenter = ({
    buttonAccept,
    buttonReject,
    recentRequestData,
    counselor
}) => {
    
    return (
        <div className="Counselor-container">
            <div className="Counselor-wrap">
                <h1>{counselor.name}의 상담사 페이지입니다.</h1>
                <SubHeader/>
                {/* 현재 상담 신청 목록 */}
                <MultipleItems buttonAccept={buttonAccept} buttonReject={buttonReject}
                recentRequestData ={recentRequestData} />

                {/* 구분선 */}
                <div className="seperation-line"></div>

                {/* 상담내역, 코인환전, 상품등록 버튼 */}
                <div className="MainButton-form">
                    <Link to= "/consultinghistory" style={{ textDecoration: 'none' }}>
                        <Button className="Main-Button">
                            <div className="Main-text">상담내역</div>
                            <div className="Sub-text">상담 내역을 확인하세요</div>
                        </Button>
                    </Link>
                    <Link to= "/exchange" style={{ textDecoration: 'none' }}>
                        <Button className="Main-Button">
                            <div className="Main-text">코인환전</div>
                            <div className="Sub-text">보유 코인을 환전하세요</div>
                        </Button>
                    </Link>
                    <Link to= {`/product/${counselor.id}`} style={{ textDecoration: 'none' }}>
                        <Button className="Main-Button">
                            <div className="Main-text">상품등록</div>
                            <div className="Sub-text">새로운 상품을 등록하세요</div>
                        </Button>
                    </Link>
                    <Link to= {`/product/${counselor.id}`} style={{ textDecoration: 'none' }}>
                        <Button className="Main-Button">
                            <div className="Main-text">상품등록</div>
                            <div className="Sub-text">새로운 상품을 등록하세요</div>
                        </Button>
                    </Link>
                </div>

                {/* 프로필 수정, 관리자 문의, 미정 버튼 */}
                <div className="SubButton-form">
                    <Link to= {`/editcounselor/${counselor.id}`} style={{ textDecoration: 'none' }}>
                        <Button className="Sub-Button">
                            <div className="Subbutton-text">프로필 등록</div>
                        </Button>
                    </Link>
                    <Link to= "/askadmin" style={{ textDecoration: 'none' }}>
                        <Button className="Sub-Button">
                            <div className="Subbutton-text">관리자 문의</div>
                        </Button>
                    </Link>
                </div>
                <Calendar_form/>
            </div>
        </div>
    )
}