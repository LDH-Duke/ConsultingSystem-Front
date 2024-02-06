import React, { useEffect } from "react";
import Layout from '../../../../components/Layout/Layout';
import { Banner } from '../../../../components/Layout/Banner/Banner';
import { List } from '../../../../components/Layout/List/List';

export const MainPresenter = ({
    counselors
}) => {
    console.log(counselors)
    
    return (
        <Layout nav={1}>
            <Banner/>
            <List counselors={counselors}/>
        </Layout>
    )
}