import React from "react";
import "./style/SearchCard.css";
import SearchCheckbox from './SearchCheckbox'

const SearchCard = (props) => {
    const { searchCategoryTitle, searchCheckboxTitle } = props;

    return (
        <div className='searchCard-container'>
            <div className='searchCard-content-box'>
                <div className='searchCard-title-box'>
                    {searchCategoryTitle}
                    </div>
                    <div className='searchCard-checkbox-box'>
                        {
                            searchCheckboxTitle && searchCheckboxTitle.map(
                                (title, index) => (
                                    <SearchCheckbox key={index} searchCheckboxTitle={title} />
                                )
                            )
                        }
                </div>
            </div>
        </div>
    )
}

export default SearchCard;