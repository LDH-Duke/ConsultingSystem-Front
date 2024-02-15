import React from 'react'
import './SearchResult.css'
import Layout from '../../../../components/Layout/Layout';
import SearchInput from '../Search/components/SearchInput';
import { List } from '../../../../components/Layout/List/List';

export const SearchResultPresenter = ({
    keyword,
    setKeyword,
    Search,
    onKeyEnter,

    searchResults,
    moveCounselorDetail,

    favorites,
    addFavorite,
    deleteFavorite,

    // isModalOpen,
    // modalOpen,
    // handleOk,
    // handleCancel,
    // modalItems,
    // modalButtons,
}) => {

    return (
        <Layout nav={1} title={'검색'}>
            <div className="search-main-container">
                <SearchInput
                    keyword={keyword}
                    setKeyword={setKeyword}
                    Search={Search}
                    onKeyEnter={onKeyEnter}
                />
                {
                    searchResults &&
                    <List
                        counselors={searchResults}
                        moveCounselorDetail={moveCounselorDetail}
        
                        favorites={favorites}
                        addFavorite={addFavorite}
                        deleteFavorite={deleteFavorite}
        
                        // isModalOpen={isModalOpen}
                        // modalOpen={modalOpen}
                        // handleOk={handleOk}
                        // handleCancel={handleCancel}
                        // modalItems={modalItems}
                        // modalButtons={modalButtons}
                    />
                }
            </div>
        </Layout>
    )
}