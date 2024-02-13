import React from "react";
import './MenuList.css';
import { Link } from "react-router-dom";

export const MenuList = ({
    myMenuItems
}) => {
    return (
        <div className="mymenu-tab">
            <ul className="mymenu-grid">
                {
                    myMenuItems &&
                    myMenuItems.map((myMenuItem, idx) =>
                    (
                        <li className={`menu-item ${idx}`} key={`menu-item ${idx}`}>
                            <Link className="menu-item-link" to={myMenuItem.path}>
                                <span>{myMenuItem.title}</span>
                            </Link>
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}