import React from 'react';
import './style/ReviewCard.css'

const ReviewCard = ({
    counselors
}) => {

    const { name, category, rank } = counselors;
    
    return (
        <div className='reviewcard-container'>
            <div className='reviewcard-counselor-profile'>
                <div className='reviewcard-counselor-img'></div>
                <div className='reviewcard-text-box'>
                    <div className='reviewcard-counselor-text'>
                        <span>{category}</span>
                        <span>{name}</span>
                        <span>{rank}</span>
                    </div>
                    <div className='reviewcard-rating-username'>
                        <span>★★★★★</span>
                        <span>김권후</span>
                    </div>
                    <div className='reviewcard-call-time'>
                        <span>(통화 10~30분)</span>
                    </div>
                </div>
            </div>
            <div className='reviewcard-comment'>
                <span>{"김권후"}</span>
            </div>
        </div>
    )
}

export default ReviewCard;