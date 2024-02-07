import React from "react";
import Layout from "../../../../components/Layout/Layout";
import { Ask } from "../AskAdmin/components/Ask";

export const UpdateAskAdminPresenter = ({
    onUpdate,
    setAsk,
}) => {
    return(
        <Layout nav={0}>
            <Ask
                isUpdate={false} 
                onUpdate={onUpdate} 
                setAsk = {setAsk} 
            />
        </Layout>
    )
}