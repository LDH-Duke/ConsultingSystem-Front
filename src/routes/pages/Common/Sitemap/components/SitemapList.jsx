import React from "react";
import { SitemapListItem } from './SitemapListItem';
import './SitemapList.css';

export const SitemapList = ({
    items
}) => {
    return (
        <div className="sitemap-container">
            <div className="sitemap-list-container">
                <SitemapListItem items={items}/>
            </div>
        </div>
    )
}