import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';
import { Button, Form } from 'antd';

const Header = props => {

    return (
        <div className='header-container'>
            <div className='header-img-box'>
                <Link to='/'>로고</Link>
            </div>
            <div className='header-text-box'>
                <Link to='/search'>검색</Link>
                <Link to='/pricedetail'>결제내역</Link>
                <Link to='review'>후기내역</Link>
                <Link to='/coin'>코인충전</Link>
                <Link to='/favorite'>즐겨찾기</Link>
                <Link to='/signup'>회원가입</Link>
                <Link to='/editprofile'>프로필수정</Link>
                <Form.Item>
                    <Link to='/sign'><Button>로그인</Button></Link>
                </Form.Item>
            </div>
        </div>
    )
}

export default Header