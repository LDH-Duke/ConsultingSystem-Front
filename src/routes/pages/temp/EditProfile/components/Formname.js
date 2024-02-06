import React from "react";
import "./style/Formname.css"

const Formname = props => {
    const {name} = props

    /* RENDER */
    return(
        <div className="Formname">
            <span>{name}</span>
        </div>
    )
}

export default Formname