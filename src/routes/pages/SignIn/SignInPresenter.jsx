import React from 'react'
import {Button, Form, Input, Checkbox} from 'antd'
import './SignIn.css'
import Title from '../../../components/Title'
import Formname from './components/Formname'
import { Link } from 'react-router-dom'

export const SignInPresenter = ({
    setId,
    setPw,
    onSubmit,
    setIsUser
}) => {
    return (
        <div className='signin-container'>
            <div className='signin-wrap'>
                <div className='title'>
                    <Title title = {'회원 로그인'}/>
                </div>
                <div className='form'>
                    <input type='radio' name = 'category' onChange={() => setIsUser(true)}/>회원
                    <input type='radio' name = 'category' onChange={() => setIsUser(false)}/>상담사
                    <Form>
                        <Form.Item>
                            <Formname name = {'아이디 (이메일)'}/>
                                <Input placeholder = {'아이디를 입력해 주세요.'} 
                                onChange={(e)=>setId(e.target.value)}/>
                        </Form.Item>
                        <Form.Item>
                            <Formname name = {'비밀번호'}/>
                                <Input.Password placeholder = {'비밀번호를 입력해 주세요.'}
                                onChange={(e)=>setPw(e.target.value)}/>
                        </Form.Item>
                        <Checkbox>로그인 상태 유지</Checkbox>
                        <div className='form-href'>
                            <a href>아이디 찾기</a>|
                            <a href>비밀번호 찾기</a>|
                            <Link to = '/signup'>회원가입</Link>
                        </div>
                        <Form.Item>
                            <Button onClick={onSubmit}>로그인</Button>
                        </Form.Item>
                        <div className='form-href'>
                            <a href>로그인이 안되나요?</a>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}