import React from "react";
import './DetailAskList.css';
import AskListCard from "./components/AskListCard";

export const DetailAskListPresenter = ({
    asks
}) => {
    return (
        <AskListCard
            asks={asks}
        />
    )
}