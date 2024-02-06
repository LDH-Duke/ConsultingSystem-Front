import React from "react";
import { MenuList } from "./MenuList";
import { Link } from "react-router-dom";
import { Button } from "antd";
import './Menus.css';


export const Menus = ({
    myMenuItems
}) => {
    return (
        <div className="mymenu-menus">
            <MenuList myMenuItems={myMenuItems}/>
            
            <div className="mymenu-links">
                <Link to='/'>
                    <span>● 이벤트</span>
                    <span>{'>'}</span>
                </Link>
                <Link to='/'>
                    <span>● 관리자 문의</span>
                    <span>{'>'}</span>                    
                </Link>
                <Button>로그아웃</Button>
            </div>
        </div>
    )
}