import React from "react";
import './SearchCard.css';

const SearchCard = (
    props
) => {

    const {header} = props;

    return (
        <div className="search-inner-common">
            <div className="search-inner-header">
                <h1>{header}</h1>
                <div className="search-inner-refresh-box">
                    <span>새로고침</span>
                    <button></button>
                </div>
            </div>
            <div className="search-inner-check-box">
                <button>ㅁㄴㅇㄹ</button>
                <button>ㅁㄴㅇㄹ</button>
            </div>
                
        </div>
    )
}

export default SearchCard;