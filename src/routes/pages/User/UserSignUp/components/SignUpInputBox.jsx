import React from "react";
import { InputComponent } from '../../../../../components/Layout/Input/InputComponent';
import { Select, Space } from 'antd';
import { Input } from '../../../../../components/Layout/Input2/Input'

import './SignUpInputBox.css';

export const SignUpInputBox = ({
    isCheckEmail,
    isCheckPw,

    setUserInfo,

    checkEmail,
    checkPw,
    checkPhone,
}) => {
    const option = [
        {
            label: '대한민국 +82',
            value: 'korea',
            emoji: '대한민국',
            desc: '+82',
        },
        {
            label: '미국 +1',
            value: 'usa',
            emoji: '미국',
            desc: '+1'
        },
    ];

    return (
        <div className="signup-input-container">
            <Input
                label={'아이디'}
                placeholder={'아이디(이메일)을 입력하세요.'}
                onChange={function (e) {
                    const email = e;
                    setUserInfo(info => {
                        return { ...info, email };
                    });
                }}

                onBlur={checkEmail}
            />

            <Input
                label={'비밀번호'}
                placeholder={'비밀번호를 입력하세요.'}
                type={'password'}
                onChange={function (e) {
                    const pw = e;
                    setUserInfo(info => {
                        return { ...info, pw };
                    });
                }}
            />

            <Input
                label={'비밀번호 확인'}
                placeholder={'비밀번호를 입력하세요.'}
                type={'password'}
                onChange={function (e) {
                    const pw_check = e;
                    setUserInfo(info => {
                        return { ...info, pw_check };
                    });
                }}

                onBlur={checkPw}
            />
            <Input
                label={'이름'}
                placeholder={'이름을 입력하세요.'}
                onChange={function (e) {
                    const name = e;
                    setUserInfo(info => {
                        return { ...info, name };
                    });
                }}
            />
            <Input
                label={'휴대폰 번호'}
                placeholder={'휴대폰 번호를 입력하세요.'}
                onChange={function (e) {
                    const phone = e;
                    setUserInfo(info => {
                        return { ...info, phone };
                    });
                }}

                onBlur={checkPhone}
            />

        </div>
    )
}






{/* <InputComponent
                name='아이디 (이메일)'
                type='email'
                placeholder='아이디를 입력해주세요'
                onChange={(e) => {
                    const email = e.target.value;
                    setUserInfo(info => {
                        return { ...info, email };
                    });
                }}
                onBlur={checkEmail}

                isShowWarning={!isCheckEmail}
                warnings={['이메일 형식이 맞지 않습니다']}
            />

            <InputComponent
                name='비밀번호'
                type='password'
                placeholder='비밀번호를 입력해주세요'
                onChange={(e) => {
                    const pw = e.target.value;
                    setUserInfo(info => {
                        return { ...info, pw };
                    });
                }}
            />

            <InputComponent
                name='비밀번호 확인'
                type='password'
                placeholder='비밀번호를 확인'
                onChange={(e) => {
                    const pw_check = e.target.value;
                    setUserInfo(info => {
                        return { ...info, pw_check };
                    });
                }}
                onBlur={checkPw}

                isShowWarning={isCheckPw}
                warnings={['비밀번호가 맞지 않습니다']}
            />

            <InputComponent
                name='이름'
                type='text'
                placeholder='이름을 입력해주세요'
                onChange={(e) => {
                    const name = e.target.value;
                    setUserInfo(info => {
                        return { ...info, name };
                    });
                }}
            /> */}


            
            {/* <div className="input-phone-container">
                <span className="phone-notice">회원가입을 위해 휴대폰 인증을 진행해주세요</span>
                <div className="input-phone">
                    <Select
                        style={{ width: '100%' }}
                        defaultValue={['korea']}
                        optionLabelProp="label"
                        option={option}
                        optionRender={(option) => (
                            <Space>
                                <span role='img' aria-label={option.data.label}>
                                    {option.data.emoji}
                                </span>
                                {option.data.desc}
                            </Space>
                        )}
                    />
                    <InputComponent
                        placeholder={'전화번호 입력'}
                        type={'tel'}
                        onChange={(e) => {
                            const phone = e.target.value;
                            setUserInfo(info => {
                                return { ...info, phone };
                            });
                        }}
                        onBlur={checkPhone}
                    />
                </div>
            </div> */}
