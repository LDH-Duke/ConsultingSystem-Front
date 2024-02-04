import React from 'react'
import './Footer.css'

export const Footer = () => {

    const userInfo = [
        '대표자명 : 임준오',
        '이메일 : mdmd2024@mdmd.md',
        '주소 : 부산광역시 사상구 주례로 47',
        '고객센터 : 051-524-4821',
    ]

    return (
        <div className='footer-container'>
            <div className='footer-wrap'>
                <div className='company'>
                    <span>MDMD</span>
                </div>
                {/* <div className='ceo'>
                    <span>대표자명 : 임준오</span>
                </div> */}
                <div className='info'>
                    <ul>
                        {
                            userInfo.map((info, idx) => {
                                return (
                                    <li>
                                        <span>{info}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <hr />
                    <span>Copyrightⓒ 2024 MDMD. All right reserved</span>
                </div>
            </div>
        </div>
    )
}
