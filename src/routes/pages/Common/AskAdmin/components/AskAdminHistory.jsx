import React from "react";
import { AskTable } from "./AskTable";
import "./AskAdminHistory.css";

export const AskAdminHistory = ({
    asks
}) => {
    return(
        <div className="askadminhistory-container">
            <AskTable asks = {asks}/>
        </div>
    )
}