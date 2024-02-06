import React from "react";
import { MyInfo } from "./Info/MyInfo";
import { Menus } from "./Menu/Menus";
import { MenuList } from "./Menu/MenuList";
import './MyMenuInfo.css';

export const MyMenuInfo = ({
    myMenuItems
}) => {
    return (
        <div className="mymenu-container">
            <MyInfo/>
            {/* <Menus myMenuItems={myMenuItems}/> */}
            <MenuList myMenuItems={myMenuItems}/>
        </div>
    )
}