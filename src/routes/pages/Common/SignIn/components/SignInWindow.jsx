import React from "react";
import { SignInBox } from './SignInBox';
import styled from "styled-components";
import './SignInWindow.css';
import { Switch } from 'antd';

export const SignInWindow = ({
    isUser,
    isCheckEmail,

    setEmail,
    setPw,

    checkEmail,

    toggleUserSignIn,
    SignIn
}) => {
    return (
        <div className="signin-container">
            {/* 토글 형식 */}
            <div className="user-toggle">
                <span>상담사 로그인</span>
                <Switch onChange={toggleUserSignIn} />
            </div>

            {
                isUser ?
                    <SignInBox
                        isCheckEmail={isCheckEmail}

                        setEmail={setEmail}
                        setPw={setPw}

                        checkEmail={checkEmail}

                        title={'회원 로그인'}
                        signUpLink='/user/signup'       // FIXME: 링크 수정 필요
                        SignIn={SignIn}
                    /> :
                    <SignInBox
                        isCheckEmail={isCheckEmail}

                        setEmail={setEmail}
                        setPw={setPw}

                        checkEmail={checkEmail}

                        title={'상담사 로그인'}
                        signUpLink='/counselor/signup'  // FIXME: 링크 수정 필요
                        SignIn={SignIn}
                    />
            }
            {/* <CoverSignIn/> */}
            {/* <CounselorSignInBox
                    Box={Box}
                    isLeft={false}
                /> */}
            {/* <SocialContainer>
                    <div className="title">회원 로그인</div>

                    <IconContainer>
                        <div className="icon instagram">인스타그램</div>
                        <div className="icon naver">네이버</div>
                        <div className="icon kakao">카카오</div>
                    </IconContainer>

                    <div className="foot">회원가입</div>
                </SocialContainer>

                <InputContainer>
                    <InputComponent
                        name='아이디 (이메일)'
                        type='email'
                        placeholder='아이디를 입력해주세요.'
                        />
                    <InputComponent
                        name='비밀번호'
                        type='password'
                        placeholder='비밀번호를 입력해주세요.'
                    />
                </InputContainer>

                <FindContainer>
                    <Link>아이디 찾기</Link>
                    <Divide />
                    <Link>비밀번호 찾기</Link>
                </FindContainer>

                <Button >로그인</Button> */}
        </div>
    )
}