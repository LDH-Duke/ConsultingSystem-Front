import React from "react";
import './style/AuthPw.css';
import {Form, Input, Button} from 'antd';

const AuthPw = ({
    setPw,
    check
}) => {
    return(
        <div className="authpw">
            <h4>비밀번호 인증</h4>
            <Form.Item>
                <Input placeholder="비밀번호를 인증해주세요"
                onChange={(e) => setPw(e.target.value)}></Input>
            </Form.Item>
            <Button onClick={check}>인증하기</Button>
        </div>
    )
}

export default AuthPw;