import React, { useEffect } from "react";
import { Form, Input, Button, Select, Space } from "antd";
import './SignIn.css';
import Layout from '../../../../components/Layout/Layout';
import styled from "styled-components";
import { SignInWindow } from './components/SignInWindow';

export const SignInPresenter = ({
    isUser,
    isCheckEmail,

    setEmail,
    setPw,

    checkEmail,

    toggleUserSignIn,
    SignIn,
}) => {
    return (
        <Layout nav={1}>
            <div className='signin-presenter'>
                <div className='signin-notice'>
                    <span>아이디와 비밀번호를 입력하신 후 로그인 버튼을 클릭해 주세요.</span>
                </div>
                <SignInWindow 
                    isUser={isUser}
                    isCheckEmail={isCheckEmail}

                    setEmail={setEmail}
                    setPw={setPw}

                    checkEmail={checkEmail}

                    toggleUserSignIn={toggleUserSignIn}
                    SignIn={SignIn}
                />
            </div>
        </Layout>
    )
}