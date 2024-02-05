import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export const Nav = ({ nav }) => {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <Link to="/"><span>MDMD</span></Link>
            </div>
            <div className='tab'>
                {
                    nav ?
                        <ul>
                            <Link to="/search">검색</Link>
                            <Link>코인충전</Link>
                            <Link>마이메뉴</Link>
                        </ul> :
                        <ul>
                            <Link>검색</Link>
                            <Link>마이메뉴</Link>
                        </ul>
                }

            </div>
            <div className='user'>
                <Link>로그인</Link>
            </div>
        </div>
    )
}
