import React, { useEffect } from "react";
import './Sitemap.css';
import Layout from '../../../../components/Layout/Layout';
import { SitemapList } from './components/SitemapList';


export const SitemapPresenter = ({
    items
}) => {
    return (
        <Layout nav={1}>
            <SitemapList items={items}/>
        </Layout>
    )
}