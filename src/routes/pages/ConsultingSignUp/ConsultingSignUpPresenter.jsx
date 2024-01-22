import React from "react";
import Title from '../../../components/Title';
import Formname from './components/Formname';
import { Form, Input, Button, Checkbox } from "antd";
import './ConsultingSignUp.css'

export const ConsultingSignUpPresenter = () => {
    return(
        <div className='consultingsignup-container'>
            <div className='consultingsignup-wrap'>
                <div className='title'>
                    {/* <Header /> */}
                    <Title title = {'회원가입'} />
                </div>
                <div className="form">
                    <Form>
                        <Formname name = {'구분'} />
                        <div className="form-select">
                            <Checkbox>대면 상담</Checkbox>
                            <Checkbox>전화 상담</Checkbox>
                            <Checkbox>채팅 상담</Checkbox>
                        </div>
                        <Form.Item>
                            <Formname name = {'아이디 (이메일)'} />
                            <Input placeholder = {'아이디를 입력해 주세요.'}/>
                        </Form.Item>
                        <Form.Item>
                            <Formname name = {'예명'}/>
                                <Input.Password placeholder = {'예명을 입력해 주세요.'} />
                        </Form.Item>
                        <Form.Item>
                            <Formname name = {'휴대폰 번호'}/>
                                <Input.Password placeholder = {'휴대폰 번호를 입력해 주세요.'} />
                        </Form.Item>
                        <Form.Item>
                            <Formname name = {'이메일'} />
                            <Input placeholder = {'이메일을 입력해 주세요.'}/>
                        </Form.Item>
                        <Form.Item>
                            <Formname name = {'상담분야'} />
                            <Input placeholder = {'상담분야를 입력해 주세요.'}/>
                        </Form.Item>
                        <Form.Item>
                            <Formname name = {'본인소개'} />
                            <textarea cols={120} rows={5}></textarea>
                        </Form.Item>
                        <Formname name = {'본인사진'} />
                        <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange="loadFile(this)" />
                    </Form>
                    <Form.Item>
                        <Button>회원가입</Button>
                    </Form.Item>
                </div>
            </div>
        </div>
    )
}