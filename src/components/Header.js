import React from 'react';
import './style/Header.css';
import { Button, Form } from 'antd';

const Header = props => {
    const { userName } = props;

    return (
        <div className='header-container'>
            <div className='header-img-box'>
                <a href='/'>로고</a>
            </div>
            <div className='header-text-box'>
                <a href='/search'>검색</a>
                <a>후기내역</a>
                <a>코인충전</a>
                <a href='/favorite'>즐겨찾기</a>
                <Form.Item>
                    <Button>로그인</Button>
                </Form.Item>
            </div>
        </div>
    )
}

export default Header