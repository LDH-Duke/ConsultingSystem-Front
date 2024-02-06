import React from "react";
import Layout from "../../../../components/Layout/Layout";
import "./CounselorProfile.css";
import { Button } from "antd";

export const CounselorProfilePresenter = () => {
    return(
        <Layout nav={0}>
            <div className="counselorprofile-container">
                <div className="counselorprofile-wrap">
                    <div className="counselorprofile-myinfo">
                        <div className="counselorprofile-title">
                            <h4>내 정보</h4>
                        </div>
                        <div className="counselorprofile-modify">
                            <div className="counselorprofile-form">
                                <span>이름</span>
                                <input type="text" value={'홍길동'} />
                            </div>
                            <div className="counselorprofile-form">
                                <span>예명</span>
                                <input type="text" value={'홍2길2동'} />
                            </div>
                            <div className="counselorprofile-form">
                                <span>전화번호</span>
                                <input type="text" value={'010-1234-5412'} />
                            </div>
                            <div className="counselorprofile-form">
                                <span>계정 이메일</span>
                                <input type="text" value={'qwe123@naver.com'} />
                            </div>
                            <div className="counselorprofile-button">
                                <Button>취소</Button>
                                <Button>저장</Button>
                            </div>
                        </div>
                    </div>
                    <div className="counselorprofile-pw">
                        <div className="counselorprofile-pw-title">
                            <h4>비밀번호</h4>
                        </div>
                        <div className="counselorprofile-pw-modify">
                            <div className="counselorprofile-myinfo-form">
                                <span>현재 비밀번호</span>
                                <input type="text" placeholder="비밀번호 양식" />
                            </div>
                            <div className="counselorprofile-myinfo-form">
                                <span>새 비밀번호</span>
                                <input type="text" placeholder="비밀번호 양식" />
                            </div>
                            <div className="counselorprofile-myinfo-form">
                                <span>새 비밀번호 확인</span>
                                <input type="text" placeholder="비밀번호 양식" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}