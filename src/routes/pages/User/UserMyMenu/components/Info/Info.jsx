import React from "react";
import { Link } from "react-router-dom";
import './Info.css';

export const Info = ({
    notice,
    info,
    gotoText,
    gotoLink
}) => {
    return (
        <div className="mymenu-info">
            <span className="info-notice">{notice}</span>
            <span className="show-info">{info}</span>
            <Link to={gotoLink} className="go-to-button">{gotoText}</Link>
        </div>
    )
}