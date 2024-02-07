import React from "react";
import { MenuListItem } from "./MenuListItem";
import './MenuList.css';

export const MenuList = ({
    myMenuItems
}) => {
    return (
        <div className="mymenu-menu-list">
            <MenuListItem myMenuItems={myMenuItems}/>
        </div>
    )
}