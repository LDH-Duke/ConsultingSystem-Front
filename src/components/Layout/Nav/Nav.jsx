import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <span>MDMD</span>
            </div>
            <div className='tab'>
                <ul>
                    <Link>검색</Link>
                    <Link>코인충전</Link>
                    <Link>마이메뉴</Link>
                </ul>
            </div>
            <div className='user'>
                <Link>로그인</Link>
            </div>
        </div>
    )
}
