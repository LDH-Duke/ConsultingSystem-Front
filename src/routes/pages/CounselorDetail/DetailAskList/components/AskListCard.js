import React from "react";
import './style/AskListCard.css';
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
                                <span className="admin-ask-name">
                                    문의 상태: {ask.user.name}
                                </span>
                                <span className="admin-ask-status">
                                    문의 상태: {ask.id}
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
                            <div className="admin-ask-buttons">
                                <Button>답변하기</Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>

    )
}

export default AskListCard;