import React from "react";
import './AskList.css';
import AskListCard from './components/AskListCard';

export const AskListPresenter = ({
    asks
}) => {

    console.log(asks)

    return (
        <div className="AskList-container">
            <AskListCard
                asks={asks}
            />
        </div>
    )
}