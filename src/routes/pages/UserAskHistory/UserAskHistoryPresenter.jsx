import React from "react";
import './UserAskHistory.css';
import AskListCard from "./components/AskListCard";

export const UserAskHistoryPresenter = ({
    asks
}) => {
    return(
        <div className="useraskhistory-container">
            <div className="useraskhistory-wrap">
                <AskListCard 
                    asks={asks}
                />
            </div>
        </div>
    )
}