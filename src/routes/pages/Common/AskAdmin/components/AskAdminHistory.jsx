import React from "react";
import { AskTable } from "./AskTable";
import "./AskAdminHistory.css";

export const AskAdminHistory = ({
    asks,
    onDelete
}) => {
    return(
        <div className="askadminhistory-container">
            <AskTable
            onDelete = {onDelete} 
            asks = {asks}/>
        </div>
    )
}