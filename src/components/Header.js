import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';
import { Button, Form } from 'antd';
import cookie from '../cookie';
import API from '../api/API';

const Header = ({
    hasCookies,
    removeCookies
}) => {

    const user_id = cookie.getCookie('id');

    return (
        <div className='header-container'>
            <div className='header-img-box'>
                <Link to='/'>로고</Link>
            </div>
            <div className='header-text-box'>
                <Link to='/search'>검색</Link>
                <Link to='/pricedetail'>결제내역</Link>
                <Link to='/review'>후기내역</Link>
                <Link to='/coin'>코인충전</Link>
                <Link to={`/favorite/${user_id}`}>즐겨찾기</Link>
                <Link to='/signup'>회원가입</Link>
                <Link to='/mypage'>마이페이지</Link>
                <Link to='/exchange'>포인트 환전</Link>
                <Link to='/counselor/home'>상담사용 메인</Link>
                <Link to='/ConsultingSignUp'>상담사 등록하기</Link>
                <Link to='/admin/main'>관리자</Link>
                <Form.Item>
                    {
                        hasCookies ?
                        <Button onClick={removeCookies}>로그아웃</Button> :
                        <Link to='/sign'><Button>로그인</Button></Link>
                    }
                </Form.Item>
            </div>
        </div>
    )
}

export default Header