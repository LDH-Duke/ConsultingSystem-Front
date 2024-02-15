import React from "react";
import Layout from '../../../../components/Layout/Layout';
import { Ask } from "./components/Ask";
import { AskTab } from "./components/AskTab";

export const UserAskPresenter = ({
    setContent,

    onSubmit
}) => {
    return(
        <Layout nav={0}>
            <AskTab 
            setContent={setContent}
            
            onSubmit={onSubmit}
            />
        </Layout>
    )
}