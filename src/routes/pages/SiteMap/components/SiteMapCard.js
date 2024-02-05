import React from "react";
import './styles/SiteMapCard.css';

const SiteMapCard = (
    props
) => {

    const {sitemapcard_title} = props;
    const {sitemapcard_body} = props;
    
    return (
        <div className="sitemapcard-container">
            <div className="sitemapcard-title-box">
                {sitemapcard_title}
            </div>
            <div className="sitemapcard-body-box">
                {sitemapcard_body}
            </div>
        </div>
    )
}

export default SiteMapCard;