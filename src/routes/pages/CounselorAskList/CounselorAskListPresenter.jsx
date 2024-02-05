import React from "react";
import './CounselorAskList.css'
import AskListCard from "./components/AskListCard";

export const CounselorAskListPresenter = ({
    asks
}) => {

    return (
        <div>
            <AskListCard 
                asks={asks}
            />
        </div>
    )
}