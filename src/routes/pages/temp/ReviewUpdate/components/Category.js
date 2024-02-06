import React from "react";
import './style/Category.css';

const Category = (props) => {
    const {category} = props
    return(
        <div className="category">
            <span>{category}</span>
        </div>
    )
}

export default Category;