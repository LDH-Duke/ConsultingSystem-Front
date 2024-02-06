import React from 'react';
import './style/ReviewCard.css'

const ReviewCard = ({
    counselor,
    reviews
}) => {

    console.log(reviews)
    return (

        <>
            {
                reviews!=null ?
                    reviews.map((review) => (
    
                        <div className='reviewcard-container'>
                            <div className='reviewcard-counselor-profile'>
                                <div className='reviewcard-counselor-img'></div>
                                <div className='reviewcard-text-box'>
                                    <div className='reviewcard-counselor-text'>
                                        <span>{counselor.name}</span>
                                        <span>{counselor.status}</span>
                                        <span>{counselor.rank}</span>
                                    </div>
                                    <div className='reviewcard-rating-username'>
                                        <span>리뷰번호: {review.id}</span>
                                        <span>점수: {review.socore}</span>
                                    </div>
                                    <div className='reviewcard-call-time'>
                                        <span>(통화 10~30분)</span>
                                    </div>
                                </div>
                            </div>
                            <div className='reviewcard-comment'>
                                <span>{review.content}</span>
                            </div>
                        </div>
                    ))
                :<div> 없음 </div>
            }

        </>

    )
}

export default ReviewCard;