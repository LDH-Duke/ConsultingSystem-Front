import React from "react";
import "./CounselorTabContent.css";

const CounselorTabContent = ({
    title,
    content
}) => {

    return (
        <div className="counselor-tab-container">
            <div className="counselor-tab-wrap">
                <div className="tab-box">
                    <div className="tab-title-box">
                    {title}
                    </div>
                    <div className="tab-content-box">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounselorTabContent;