import React from "react";
import { MyInfo } from "./Info/MyInfo";
import { MenuList } from "./Menu/MenuList";
import { Divider } from "antd";
import './MyMenuInfo.css';

export const MyMenuInfo = ({
    userInfo,
    myMenuItems
}) => {
    return (
        <div className="mymenu-container">
            <div className="mymenu-wrap">
                <MyInfo userInfo={userInfo} />
                <Divider />
                <MenuList myMenuItems={myMenuItems} />
            </div>

        </div>
    )
}