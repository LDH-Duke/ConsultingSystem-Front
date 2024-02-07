import React from "react";
import styled from "styled-components";
import './SearchInput.css'

const SearchInput = () => {

    return (
        <div className="search-input-container">
            <input type="text" placeholder="검색 내용을 입력해주세요."/>
            <button>검색</button>
        </div>
    )
}

export default SearchInput;