import React from "react";
import { InputComponent } from '../../../../../components/Layout/Input/InputComponent';
import { Button } from "antd";
import './ProfileBox.css';

export const ProfileBox = ({
    userInfo,
    setUserInfo,

    onModify,
}) => {
    return (
        <div className="profile-box-container">
            <div className="profile-box">
                <span className="title">프로필</span>
                <InputComponent
                    name='아이디'
                    isWrite={true}
                    value={userInfo.email}
                    onChange={(e) => {
                        const email = e.target.value;
                        setUserInfo(info => {
                            return {...info, email};
                        });
                    }}
                    />
                <InputComponent
                    name='패스워드'
                    type='password'
                    isWrite={true}
                    onChange={(e) => {
                        const pw = e.target.value;
                        setUserInfo(info => {
                            return {...info, pw};
                        });
                    }}
                    />
                <InputComponent
                    name='이름'
                    isWrite={true}
                    value={userInfo.name}
                    onChange={(e) => {
                        const name = e.target.value;
                        setUserInfo(info => {
                            return {...info, name};
                        });
                    }}
                    />
                <InputComponent
                    name='전화번호'
                    isWrite={true}
                    value={userInfo.phone}
                    onChange={(e) => {
                        const phone = e.target.value;
                        setUserInfo(info => {
                            return {...info, phone};
                        });
                    }}
                />
                <Button onClick={onModify}>수정하기</Button>
            </div>
        </div>
    )
}