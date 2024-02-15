import React from "react";
import Layout from '../../../../components/Layout/Layout';
import { Ask } from "./components/Ask";
import { Tabs } from "antd";

export const UserAskPresenter = ({
    setContent,

    onSubmit
}) => {
    return(
        <Layout nav={0}>
            <Tabs />
            <Ask 
            setContent={setContent}
            
            onSubmit={onSubmit}
            />
        </Layout>
    )
}