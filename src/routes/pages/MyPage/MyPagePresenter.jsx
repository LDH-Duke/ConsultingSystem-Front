import React from "react";
import Title from '../../../components/Title';
import './MyPage.css';
import AuthPw from "./components/AuthPw";
import {Form, Input, Button} from 'antd';

export const MyPagePresenter = ({
    isAuth,
    setPw,
    check,
    user,
    dummy,
    onSubmit,
    Changename,
    Changeemail,
    Changephone
}) => {
    return(
        <div className="mypage-container">
            <div className="mypage-wrap">
                <div className="title">
                    <Title title = {'마이페이지'} />
                </div>
                {isAuth ?
                    (
                    <div className="mypage-info">
                        <div className="mypage-id">
                            <h4>아이디</h4>
                            <Input value={user.id} readOnly />
                        </div>
                        <div className="mypage-email">
                            <h4>이메일</h4>
                            <Input value={user.email} onChange={Changeemail} />
                        </div>
                        <div className="mypage-name">
                            <h4>닉네임</h4>
                            <Input value={user.name} onChange={Changename}/>
                        </div>
                        <div className="mypage-phone">
                            <h4>전화번호</h4>
                            <Input value={user.phone} onChange={Changephone} />
                        </div>
                        <div className="mypage-totalcoin">
                            <h4>총 보유 코인</h4>
                            <Input value={user.total_coin} readOnly />
                        </div>
                        <div className="mypage-createdAt">
                            <h4>아이디 생성 일자</h4>
                            <Input value={user.createdAt} readOnly />
                        </div>
                        <Button onClick={onSubmit}>수정하기</Button>
                    </div>
                    ) : (
                    <AuthPw setPw={setPw} check={check}/>
                )}
            </div>
        </div>
    )
}