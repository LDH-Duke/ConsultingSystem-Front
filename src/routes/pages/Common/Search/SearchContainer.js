import React, {useState} from 'react'
import { SearchPresenter } from './SearchPresenter'
import { useNavigate } from 'react-router-dom'

const SearchContainer = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState('');

  const onKeyEnter = (e) => {
    if (e.Key === 'Enter') {
      Search();
    }
  }

  const Search = () => {
    const searchKeyword = keyword.trim();
    navigate(`/search/result?keyword=${searchKeyword}`);
  }

  return (
    <SearchPresenter
      keyword={keyword}
      setKeyword={setKeyword}
      Search={Search}
      onKeyEnter={onKeyEnter}
    />
  )
}

export default SearchContainer