import React from "react";
import styled from "styled-components";
import { InputComponent } from '../../../../../components/Layout/Input/InputComponent';
import { Link } from "react-router-dom";
// import { Button } from "antd";
import { Button } from "../../../../../components/Layout/Button/Button";
import { Input } from "../../../../../components/Layout/Input2/Input";
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
            <div className="signin-title">
                <span>{title}</span>
            </div>

            <div className="signin-input">
                <Input
                    label={'아이디'}
                    onChange={setEmail}
                    placeholder={'아이디를 입력하세요.'}
                    onBlur={checkEmail}
                />

                {/** 경고 메세지 삼항연산자 자리 */
                    // <div className='msg'>
                    //     <span>아이디 또는 비밀번호가 일치하지 않습니다.</span>
                    // </div>
                }

                <Input
                    label={'비밀번호'}
                    type={'password'}
                    onChange={setPw}
                    placeholder={'비밀번호를 입력하세요.'} />

            </div>
            <Button onClick={SignIn} title={'로그인'} />

            <div className="find-container">
                <Link>아이디 찾기</Link>
                <div className="divide" />
                <Link>비밀번호 찾기</Link>
            </div>

            
            <Button onClick={signUpLink} title={'회원가입'} type={'basic'} />

        </div>
    )
}




{/* <InputComponent
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
                /> */}


{/* <Link to={signUpLink}>회원가입</Link>
            <Link style={{width: '100%'}} onClick={SignIn}>로그인</Link> */}