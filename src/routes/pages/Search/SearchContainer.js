import React, { useEffect, useState } from 'react'
import { SearchPresenter } from './SearchPresenter'
import { Input } from 'antd';
import API from '../../../api/API';

const SearchContainer = () => {

  // 검색
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const onSubmit = (value, _e) => {
    const searchinfo = API.getSearch(value)
    console.log(searchinfo)
  }

  return (
    <SearchPresenter onSearch={onSubmit} Search={ Search }/>
  )
}

export default SearchContainer