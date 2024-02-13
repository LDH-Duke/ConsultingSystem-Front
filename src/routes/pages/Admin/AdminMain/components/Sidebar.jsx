import React from "react";
import './Sidebar.css'

export const Sidebar = ({
    tabs,
    setContent,
}) => {
    return (
        <ul className="tabs">
            {
                tabs.map((tab, idx) => (
                    <li className="tabs-item" onClick={() => {setContent(idx)}}>
                        <div className="tab-title">{tab.title}</div>
                    </li>
                ))
            }
        </ul>
    )
}