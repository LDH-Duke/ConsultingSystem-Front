import React from "react";
import { SignUpInputBox } from "./SignUpInputBox";
// import { Button } from "antd";
import { Button } from "../../../../../components/Layout/Button/Button";
import './SignUpBox.css';


export const SignUpBox = ({
    title,

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
        <div className="user-signup-container">
            <div className="signup-wrap">
                <div className="signup-notice">
                    <span>회원가입을 통해 다양한 서비스를 이용할 수 있습니다.</span>
                </div>

                <SignUpInputBox
                    isCheckEmail={isCheckEmail}
                    isCheckPw={isCheckPw}

                    setUserInfo={setUserInfo}

                    checkEmail={checkEmail}
                    checkPw={checkPw}
                    checkPhone={checkPhone}
                />

                <Button onClick={doubleCheck} title={'중복확인'} type={'basic'} />
                <Button onClick={SignUp} title={'회원가입'} />

            </div>
        </div>
    )
}


{/* <Button style={{ width: '100%' }} onClick={doubleCheck}>
                    중복확인
                </Button>

                <Button style={{ width: '100%' }} onClick={SignUp} disabled={!canSignup}>
                    회원가입
                </Button> */}