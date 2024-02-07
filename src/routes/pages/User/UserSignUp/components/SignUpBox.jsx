import React from "react";
import { SignUpInputBox } from "./SignUpInputBox";
import { Button } from "antd";
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
        <div className='signup-presenter'>
            <div className="signup-container">
                <div className="signup-box">
                    <div className="social-container">
                        <div className="title">{title}</div>
                    </div>

                    <SignUpInputBox
                        isCheckEmail={isCheckEmail}
                        isCheckPw={isCheckPw}

                        setUserInfo={setUserInfo}
                    
                        checkEmail={checkEmail}
                        checkPw={checkPw}
                        checkPhone={checkPhone}
                    />
                    
                    <Button style={{width: '100%'}} onClick={doubleCheck}>
                        중복확인
                    </Button>

                    <Button style={{width: '100%'}} onClick={SignUp} disabled={!canSignup}>
                        회원가입
                    </Button>
                </div>
            </div>
        </div>
    )
}