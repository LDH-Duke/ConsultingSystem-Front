import React from 'react'
import './Banner.css'
import { Carousel } from 'antd';
import Bn1 from '../../../assets/bannerImg/bn1.jpg'
import Bn2 from '../../../assets/bannerImg/bn2.jpg'
import Bn3 from '../../../assets/bannerImg/bn3.jpg'
import Bn4 from '../../../assets/bannerImg/bn4.jpg'


const contentStyle = {
    height: '250px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export const Banner = () => {
    const imgs = [
        {
            url: Bn1
        },
        {
            url: Bn2
        },
        {
            url: Bn3
        },
        {
            url: Bn4
        }

    ]
    return (
        <Carousel autoplay className='banner-container'>
            {
                imgs.map((img, idx) => {
                    return (
                        <div className={`bn ${idx}`} key={`banner-container ${idx}`}>
                            <img src={img.url} alt='이미지' />
                        </div>
                    )
                })
            }
            {/* <div className='bn'>
                <span>1</span>
            </div>
            <div className='bn'>
                <h3>2</h3>
            </div>
            <div className='bn'>
                <h3>3</h3>
            </div>
            <div className='bn'>
                <h3>4</h3>
            </div> */}
        </Carousel >
    )
}
