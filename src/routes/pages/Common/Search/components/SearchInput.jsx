import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchInput.css'

const SearchInput = ({
    keyword,
    setKeyword,
    Search,
    onKeyEnter,
}) => {

    return (
        <div className="search-input-container">
            <input
                type="text"
                placeholder="검색 내용을 입력해주세요."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={onKeyEnter}
            />
            <button
                onClick={Search}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
        </div>
    )
}

export default SearchInput;