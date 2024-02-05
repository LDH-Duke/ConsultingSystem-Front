import React from "react";
import styled from "styled-components";
import { InputComponent } from '../../../../../components/Layout/Input/InputComponent';
import { Link } from "react-router-dom";
import { Button } from "antd";
import './SignInBox.css';


export const SignInBox = ({
    isCheckEmail,

    setEmail,
    setPw,

    checkEmail,

    title,
    signUpLink,
    SignIn,
}) => {
    return (
        <div className="signin-box">
            <div className="social-container">
                <div className="title">{title}</div>

                <div className="icon-container">
                    <div className="icon instagram">인스타</div>
                    <div className="icon naver">네이버</div>
                    <div className="icon kakao">카카오</div>
                </div>

                <Link to={signUpLink}>
                    <div className="foot">회원가입</div>
                </Link>
            </div>

            <div className="input-container">
                <InputComponent
                    name='아이디 (이메일)'
                    type='email'
                    placeholder='아이디를 입력해주세요.'
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={checkEmail}

                    isShowWarning={!isCheckEmail}
                    warnings={['이메일 형식이 맞지 않습니다']}
                />
                <InputComponent
                    name='비밀번호'
                    type='password'
                    placeholder='비밀번호를 입력해주세요.'
                    onChange={(e) => setPw(e.target.value)}
                />
            </div>

            <div className="find-container">
                <Link>아이디 찾기</Link>
                <div className="divide" />
                <Link>비밀번호 찾기</Link>
            </div>
            
            <Button style={{width: '100%'}} onClick={SignIn}>로그인</Button>
        </div>
    )
}