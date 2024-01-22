import React from "react";
import Title from '../../../components/Title';
import Formname from './components/Formname';
import { Form, Input, Button, Select, Space } from "antd";
import './Signup.css'

export const SignupPresenter = ({
    options,
    setId,
    setPw,
    setPw2,
    setNickname,
    setTel,
    onSubmit,
}) => {
    return(
        <div className='signup-container'>
            <div className='signup-wrap'>
                <div className='title'>
                    <Title title = {'회원가입'} />
                </div>
                <div className="form">
                    <Form>
                        <Form.Item>
                            <Formname name = {'아이디 (이메일)'} />
                            <Input type="email" placeholder = {'아이디를 입력해 주세요.'}
                            onChange={(e)=>setId(e.target.value)}/>
                        </Form.Item>
                        <Form.Item>
                            <Formname name = {'비밀번호'}/>
                                <Input.Password placeholder = {'비밀번호를 입력해 주세요.'}
                                onChange={(e)=>setPw(e.target.value)} />
                        </Form.Item>
                        <Form.Item>
                            <Formname name = {'비밀번호 확인'}/>
                                <Input.Password placeholder = {'비밀번호 확인'}
                                onChange={(e)=>setPw2(e.target.value)} />
                        </Form.Item>
                        <Form.Item>
                            <Formname name = {'닉네임'} />
                            <Input placeholder = {'닉네임'}
                            onChange={(e)=>setNickname(e.target.value)}/>
                        </Form.Item>
                        <Formname name = {'회원가입을 위해 휴대폰 인증을 진행해 주세요'} />
                        <div className="form-tel">
                            <div className="form-select">
                                <Select
                                    style={{
                                    width: '100%',
                                    }}
                                    placeholder="select one country"
                                    defaultValue={['korea']}
                                    optionLabelProp="label"
                                    options={options}
                                    optionRender={(option) => (
                                    <Space>
                                        <span role="img" aria-label={option.data.label}>
                                        {option.data.emoji}
                                        </span>
                                        {option.data.desc}
                                    </Space>
                                    )}
                                />
                            </div>
                            <div className="form-input-tel">
                                <Form.Item>
                                    <Input placeholder = {'전화번호 입력'}
                                    onChange={(e)=>setTel(e.target.value)}/>
                                </Form.Item>
                            </div>
                        </div>
                        <span>본인확인 후 회원가입 및 서비스 이용이 가능합니다.</span>
                        <Form.Item>
                            <Button onClick={onSubmit}>회원가입</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}