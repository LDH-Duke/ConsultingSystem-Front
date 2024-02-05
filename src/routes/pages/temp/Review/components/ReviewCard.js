import React from 'react';
import './style/ReviewCard.css'

const ReviewCard = ({
    counselors,
    reviews
}) => {

    console.log(reviews)
    return (
        <>
            {
                counselors.map((counselor) => {
                    <div className='reviewcard-container'>
                        <div className='reviewcard-counselor-profile'>
                            <div className='reviewcard-counselor-img'></div>
                            <div className='reviewcard-text-box'>
                                <div className='reviewcard-counselor-text'>
                                    {/* <span>{counselor.category}</span> */}
                                    <span>{counselor.name}</span>
                                    <span>{counselor.rank}</span>
                                </div>
                                <div className='reviewcard-rating-username'>
                                    {/* <span>{review_score}</span> */}
                                    {/* <span>{user_id}</span> */}
                                </div>
                                <div className='reviewcard-call-time'>
                                    <span>(통화 10~30분)</span>
                                </div>
                            </div>
                        </div>
                        <div className='reviewcard-comment'>
                            {/* <span>{review_content}</span> */}
                        </div>
                    </div>
                })
            }

        </>

    )
}

export default ReviewCard;