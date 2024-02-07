import React from 'react'
import './Search.css'
import Layout from '../../../../components/Layout/Layout';
import SearchInput from './components/SearchInput';
import SearchCard from './components/SearchCard';
import RecentSearch from './components/RecentSearch';

export const SearchPresenter = ({

}) => {

    return (
        <Layout nav={1}>
            <div className="search-main-container">
                <SearchInput />
                <RecentSearch />
                <SearchCard
                    header={"상담 스타일"}
                />
                <SearchCard
                    header={"상담 분야"}
                />
            </div>
        </Layout>
    )
}