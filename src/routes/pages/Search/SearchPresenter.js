import React from 'react'
import './Search.css'
import Title from '../../../components/Title'
import SearchCard from './components/SearchCard';
import Header from '../../../components/Header';
import { Space, Checkbox } from 'antd';

export const SearchPresenter = ({
    onSearch,
    Search
}) => {
    
    return (
        <div className='search-container'>
            <div className='search-wrap'>
                <Header userName={'asdf'} />
                <Title title={'검색'} />
                <div className='search-box'>
                    <div className='search-content-box'>
                        <div className='search-input-box'>
                            <Space direction='vertical'>
                                <Search placeholder="input" onSearch={onSearch} enterButton />
                            </Space>
                        </div>
                        <div className='search-title-box'>{'검색조건'}</div>
                        <SearchCard searchCategoryTitle = {'분야1'} searchCheckboxTitle = {['가', '나']}/>
                        <SearchCard searchCategoryTitle = {'분야2'} searchCheckboxTitle = {['다', '라']}/>
                    </div>
                </div>
            </div>
        </div>
    )
}