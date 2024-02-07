import React, { useState } from "react";
import Layout from "../../../../components/Layout/Layout";
import { Sidebar } from "./components/Sidebar";
import { AskAdminHistory } from "./components/AskAdminHistory";
import { Ask } from "./components/Ask";
import "./AskAdmin.css";

export const AskAdminPresenter = ({
    onSubmit,
    setContent,
    asks,
    onDelete
}) => {

    const [tab, setTab] = useState(0)

    return(
        <Layout nav={0}>
            <div className="askadmin-container">
                <Sidebar setTab={setTab}/>
                {
                    tab === 0 ? <Ask onSubmit = {onSubmit} setContent = {setContent}
                    isUpdate={true}/> : null
                }
                {
                    tab === 1 ? <AskAdminHistory 
                    onDelete = {onDelete}
                    asks = {asks}/> : null
                }
            </div>
        </Layout>
    )
}