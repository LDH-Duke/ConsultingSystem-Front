import React from 'react';
import './style/ReviewCard.css'

const ReviewCard = props => {
    
    return (
        <div className='reviewcard-container'>
            <div className='reviewcard-counselor-profile'>
                <div className='reviewcard-counselor-img'></div>
                <div className='reviewcard-text-box'>
                    <div className='reviewcard-counselor-text'>
                        <span>타로</span>
                        <span>소피아</span>
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
                <span>김권후는 사람이 아니다.</span>
            </div>
        </div>
    )
}

export default ReviewCard;