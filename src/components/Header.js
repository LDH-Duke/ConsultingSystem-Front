import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';
import { Button, Form } from 'antd';
import cookie from '../cookie';

const Header = ({
    hasCookies,
    removeCookies
}) => {

    const user_id = cookie.getCookie('id');
    const counselor_id = cookie.getCookie('id');

    return (
        <div className='header-container'>
            <div className='header-img-box'>
                <Link to='/'>로고</Link>
            </div>
            <div className='header-text-box'>
                <p>| 회원 |</p>
                <Link to='/search'>검색</Link>
                <Link to='/pricedetail'>결제내역</Link>
                <Link to='/review'>후기내역</Link>
                <Link to='/coin'>코인충전</Link>
                <Link to={`/favorite/${user_id}`}>즐겨찾기</Link>
                <Link to='/mypage'>마이페이지</Link>
                <p>| 상담사 |</p>
                <Link to={`/counselor/home/${counselor_id}`}>상담사용 메인</Link>
                <Link to='/exchange'>포인트 환전</Link>
                <Link to='/ConsultingSignUp'>상담사 등록하기</Link>
                <Link to='/sitemap'>사이트맵</Link>
                <Link to='/signup'>회원가입</Link>
                <p>| 관리자 |</p>
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

export default Header;