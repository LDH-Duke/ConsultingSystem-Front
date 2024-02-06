import React, { useEffect } from "react";
import Layout from '../../../../components/Layout/Layout';
import { Banner } from '../../../../components/Layout/Banner/Banner';
import { List } from '../../../../components/Layout/List/List';

export const MainPresenter = ({
    isSignIn,

    counselors,
    addFavorite,
}) => {
    console.log(counselors)
    
    return (
        <Layout nav={1}>
            <Banner isSignIn={isSignIn}/>
            <List counselors={counselors} addFavorite={addFavorite}/>
        </Layout>
    )
}