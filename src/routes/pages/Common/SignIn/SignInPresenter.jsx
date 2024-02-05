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
            <SignInWindow 
                isUser={isUser}
                isCheckEmail={isCheckEmail}

                setEmail={setEmail}
                setPw={setPw}

                checkEmail={checkEmail}

                toggleUserSignIn={toggleUserSignIn}
                SignIn={SignIn}
            />
        </Layout>
    )
}