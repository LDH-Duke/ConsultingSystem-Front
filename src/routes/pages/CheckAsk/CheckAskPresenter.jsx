import React from "react";
import './CheckAsk.css';
import CheckAskCard from './components/CheckAskCard';

export const CheckAskPresenter = ({
    asks
}) => {

    console.log(asks)

    return (
        <div className="checkask-container">
            <CheckAskCard 
                asks={asks}
            />
        </div>
    )
}