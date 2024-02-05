import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export const Nav = ({ nav }) => {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <Link to='/'>MDMD</Link>
            </div>
            <div className='tab'>
                {
                    nav ?
                        <ul>
                            <Link>검색</Link>
                            <Link to='/user/favorite'>즐겨찾기</Link>
                            <Link to='/user/coin'>코인충전</Link>
                            <Link>마이메뉴</Link>
                        </ul> :
                        <ul>
                            <Link>검색</Link>
                            <Link>마이메뉴</Link>
                        </ul>
                }
            </div>
            <div className='user'>
                <Link to='/signin'>로그인</Link>
            </div>
        </div>
    )
}
