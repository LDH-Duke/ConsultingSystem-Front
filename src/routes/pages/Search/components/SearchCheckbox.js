import React from "react";
import './style/SearchCheckbox.css';
import { Checkbox } from 'antd';

const SearchCheckbox = (props) => {
    const { searchCheckboxTitle } = props

    return (
        <div className='searchCheckbox-container'>
            <Checkbox>{searchCheckboxTitle}</Checkbox>
        </div>
    )
}

export default SearchCheckbox;
