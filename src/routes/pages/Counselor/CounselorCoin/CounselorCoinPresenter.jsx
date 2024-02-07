import React from "react";
import Layout from "../../../../components/Layout/Layout";
import { HaveCoin } from "./components/HaveCoin";

export const CounselorCoinPresenter = ({
    counselor
}) => {
    return(
        <Layout nav={0}>
            <HaveCoin counselor = {counselor}/>
        </Layout>
    )
}