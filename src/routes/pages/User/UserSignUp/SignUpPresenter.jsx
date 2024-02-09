import React, { useEffect } from "react";
import './SignUp.css';
import Layout from '../../../../components/Layout/Layout';
import { SignUpBox } from "./components/SignUpBox";

export const SignUpPresenter = ({
    isCheckEmail,
    isCheckPw,

    canSignup,

    setUserInfo,

    checkEmail,
    checkPw,
    checkPhone,
    
    doubleCheck,
    SignUp,
}) => {
    return (
        <Layout nav={1} title={'회원가입'}>
            <SignUpBox
                title={'회원가입'}

                isCheckEmail={isCheckEmail}
                isCheckPw={isCheckPw}

                canSignup={canSignup}

                setUserInfo={setUserInfo}

                checkEmail={checkEmail}
                checkPw={checkPw}
                checkPhone={checkPhone}
                
                doubleCheck={doubleCheck}
                SignUp={SignUp}
            />
        </Layout>
    )
}