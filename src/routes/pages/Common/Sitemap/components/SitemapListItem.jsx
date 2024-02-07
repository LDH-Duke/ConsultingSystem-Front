import React from "react";
import { Link } from "react-router-dom";
import './SitemapListItem.css';

export const SitemapListItem = ({
    items
}) => {
    return (
        <>
            {
                items && 
                items.map(item => (
                    <Link className="sitemap-item" to={item.path}>
                        <span className="title">{item.title}</span>
                        <span className="sub-title">{item.subTitle}</span>
                    </Link>
                ))
            }
        </>
    )
}