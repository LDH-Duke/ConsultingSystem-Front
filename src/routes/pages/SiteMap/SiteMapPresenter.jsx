import React from "react";
import './SiteMap.css';
import Title from '../../../components/Title';
import SiteMapCard from "./components/SiteMapCard";

export const SiteMapPresenter = ({

}) => {
    return  (
        <div className="sitemap-container">
            <div className="sitemap-wrap">
                <Title title={'사이트맵'} />
                <div className="sitemap-content-box">
                    <div className="sitemap-button-box">
                        <SiteMapCard sitemapcard_title = {'전화상담'} sitemapcard_body = {'고민은 후련하게'}/>
                        <SiteMapCard sitemapcard_title = {'서비스상품'} sitemapcard_body = {'테스트 본문1'}/>
                        <SiteMapCard sitemapcard_title = {'최근3개월'} sitemapcard_body = {'테스트 본문1'}/>
                    </div>
                    <div className="sitemap-button-box">
                        <SiteMapCard sitemapcard_title = {'이벤트'} sitemapcard_body = {'테스트 본문1'}/>
                        <SiteMapCard sitemapcard_title = {'후기'} sitemapcard_body = {'테스트 본문1'}/>
                        <SiteMapCard sitemapcard_title = {'콘텐츠'} sitemapcard_body = {'테스트 본문1'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}