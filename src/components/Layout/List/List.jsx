import React from 'react'
import './List.css'

export const List = () => {
    const counselors = [
        {
            nickname: '홍단',
            price: '1200',
            tag: ['#친절함', '#편함', '#재밌음'],
            url: ''
        },
        {
            nickname: '홍단',
            price: '1200',
            tag: ['#친절함', '#편함', '#재밌음'],
            url: ''
        },
        {
            nickname: '홍단',
            price: '1200',
            tag: ['#친절함', '#편함', '#재밌음'],
            url: ''
        },
        {
            nickname: '홍단',
            price: '1200',
            tag: ['#친절함', '#편함', '#재밌음'],
            url: ''
        },
        {
            nickname: '홍단',
            price: '1200',
            tag: ['#친절함', '#편함', '#재밌음'],
            url: ''
        },
    ]
    return (
        <div className='list-container'>
            {
                counselors.map((counselor, idx) => {
                    return (
                        <div className={`list ${idx}`} key={`list ${idx}`}>
                            <div className='list-img'>
                                <img src={counselor.img} alt='이미지'></img>
                            </div>
                            <div className='list-info'>
                                <span>{counselor.nickname}</span>
                                <span>{counselor.price}</span>
                                {/* <span>{counselor.tag}</span> */}
                                <ul>
                                {counselor.tag.map((tag, idx) => {
                                    return (
                                        
                                            <span className={`tag ${idx}`} key={`tag ${idx}`}>{tag}</span>
                                        
                                    )
                                })}
                                </ul>
                            </div>
                            <button className='list-btn'>상담하기</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
