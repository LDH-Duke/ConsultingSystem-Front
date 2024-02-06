import React from "react";
import { AskTable } from "./AskTable";
import "./AskAdminHistory.css";

export const AskAdminHistory = ({
    askData
}) => {
    return(
        <div className="askadminhistory-container">
            <AskTable askData={askData}/>
        </div>
    )
}