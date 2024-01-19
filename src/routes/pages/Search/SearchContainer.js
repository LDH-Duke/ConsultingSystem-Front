import React, { useState } from 'react'
import { SearchPresenter } from './SearchPresenter'
import { Input } from 'antd';

const SearchContainer = () => {

  // 검색
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <SearchPresenter onSearch={onSearch} Search={ Search }/>
  )
}

export default SearchContainer