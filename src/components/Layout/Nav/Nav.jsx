import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export const Nav = ({ nav, id, signOut }) => {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <Link to='/'>MDMD</Link>
            </div>
            <div className='tab'>
                {
                    nav ?
                    // 고객
                        <ul>
                            <Link to='/search'>검색</Link>
                            <Link to='/user/coin'>코인충전</Link>
                            <Link to='/user/mymenu'>마이메뉴</Link>
                            <Link to='/sitemap'>사이트맵</Link>
                        </ul> :
                    // 상담사
                        <ul>
                            <Link to='/search'>검색</Link>
                            <Link to='/counselor'>마이메뉴</Link>
                            <Link to='/sitemap'>사이트맵</Link>
                        </ul>
                }
            </div>
            <div className='user'>
                {
                    id ?
                    <button onClick={signOut}>로그아웃</button> :
                    <Link to='/signin'>로그인</Link>
                }
            </div>
        </div>
    )
}
