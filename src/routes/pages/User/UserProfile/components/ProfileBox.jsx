import React from "react";
import { InputComponent } from '../../../../../components/Layout/Input/InputComponent';
import { Button } from "antd";
import './ProfileBox.css';

export const ProfileBox = ({
    userInfo,
    onModify
}) => {
    return (
        <div className="profile-box-container">
            <div className="profile-box">
                <span className="title">프로필</span>
                <InputComponent
                    name='아이디'
                    value={userInfo.email}
                />
                <InputComponent
                    name='패스워드'
                    type='password'
                />
                <InputComponent
                    name='이름'
                    value={userInfo.name}
                />
                <InputComponent
                    name='전화번호'
                    value={userInfo.phone}
                />
                <Button onClick={onModify}>수정하기</Button>
            </div>
        </div>
    )
}