import React from "react";
import './AskListCard.css';
import { Button } from 'antd'

/**
 * List
 */

const AskListCard = ({
    asks
}) => {

    console.log(asks)

    return (
        <>
        <div className="admin-ask-list-container">
            {
                asks.map((ask) => (
                    <div className="admin-ask-list-element">
                        <div className="admin-ask-infos">
                            <span className="admin-ask-id">
                                문의 번호: {ask.id}
                            </span>
                            <span className="admin-ask-category">
                                종류: {ask.category}
                            </span>
                            <span className="admin-ask-content">
                                문의 내용: {ask.content}
                            </span>
                            <span className="admin-ask-createdAt">
                                날짜: {ask.createdAt}
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
        </>

    )
}

export default AskListCard;