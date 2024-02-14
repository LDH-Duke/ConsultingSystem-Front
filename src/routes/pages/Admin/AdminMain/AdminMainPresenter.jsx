import React, { useEffect } from "react";
import './AdminMain.css';
import Layout from '../../../../components/Layout/Layout';
import { Sidebar } from "./components/Sidebar";

export const AdminMainPresenter = ({
    tabs,
    setContent,
    component,
}) => {
    return (
        <Layout nav={1} title={'관리자'}>
            <div className="admin-main-container">
                <Sidebar
                    tabs={tabs}
                    setContent={setContent}
                />
                {
                    component ? component : <div></div>
                }
            </div>
        </Layout>
    )
}