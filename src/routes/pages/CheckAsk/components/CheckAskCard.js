import React from "react";
import './style/CheckAskCard.css';

const CheckAskCard = ({
    asks
}) => {

    return (
        <>
            {
                asks.map((ask) => (
                    <div>
                        <span>{ask.id}  </span>
                        <span>{ask.category}  </span>
                        <span>{ask.writer}  </span>
                        <span>{ask.counselor_id}  </span>
                        <span>{ask.id}  </span>
                        <span>{ask.user_id}  </span>
                        <span>{ask.content}  </span>
                    </div>
                ))
            }
        </>
    )
}

export default CheckAskCard;