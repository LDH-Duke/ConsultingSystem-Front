import React from "react";
import { Link } from "react-router-dom";
import './MenuListItem.css';

export const MenuListItem = ({
    myMenuItems
}) => {
    return (        
        <div className="mymenu-menu-list-item">
            {
                myMenuItems &&
                myMenuItems.map(myMenuItem => (
                    <Link to={myMenuItem.path}>
                        {/* {myMenuItem.title} */}
                        <pre>{myMenuItem.title}</pre>
                    </Link>
                ))
            }
        </div>
    )
}