import React from "react";
import { Tabs } from "antd";
import Title from '../../../../components/Title';
import './AdminMain.css';

export const AdminMainPresenter = ({
    items
}) => {
    return(
        <div className="admin-page-container">
            <Title title={'관리자 메인 페이지'}/>
            <div className="admin-tab-container">
                <Tabs items={items}/>
            </div>
        </div>
    )
}