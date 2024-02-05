import React from "react";
import "./style/Title.css"


/**
 * Title
 */
const Title = props => {
    const {title} = props

    /* RENDER */
    return (
        <div className="content-title">
            <h3> {title} </h3>
        </div>
    )
}

export default Title