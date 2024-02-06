import React, { useState } from "react";
import Layout from "../../../../components/Layout/Layout";
import { Sidebar } from "./components/Sidebar";
import { AskAdminHistory } from "./components/AskAdminHistory";
import { Ask } from "./components/Ask";
import "./AskAdmin.css";

export const AskAdminPresenter = ({
    askData
}) => {

    const [tab, setTab] = useState(0)

    return(
        <Layout nav={0}>
            <div className="askadmin-container">
                <Sidebar setTab={setTab}/>
                {
                    tab === 0 ? <Ask/> : null
                }
                {
                    tab === 1 ? <AskAdminHistory askData={askData}/> : null
                }
            </div>
        </Layout>
    )
}