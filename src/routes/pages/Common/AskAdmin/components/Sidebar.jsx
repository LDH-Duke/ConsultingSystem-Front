import React from "react";
import '../components/Sidebar.css';
import { Link } from "react-router-dom";

export const Sidebar = ({
    setTab
}) => {
    const menus = [
        { name: "문의하기"},
        { name: "문의내역조회"}
    ];

    return (
        <div className="side-nav">
            <div className="side-title">
                <span>관리자 문의</span>
            </div>
            <div className="side-tap">
                <ul className="tap-list">
                    {
                        menus.map((menu,idx) => {
                        
                            return(
                                <li className={`tap ${idx}`} key={`tap ${idx}`} onClick={() => setTab(idx)}>
                                    <span>{menu.name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}