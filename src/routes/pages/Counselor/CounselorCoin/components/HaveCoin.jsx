import React from "react";

export const HaveCoin = ({
    counselor
}) => {
    return(
        <div className="havecoin-container">
            <h3>코인 환전</h3>
            <p>현재 보유 코인 : {counselor.total_coin}</p>

            <input type="text" /> -> <input type="text" />

            <button>환전하기</button>
        </div>
    )
}