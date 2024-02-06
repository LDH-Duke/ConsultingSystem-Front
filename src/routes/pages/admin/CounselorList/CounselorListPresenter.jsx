import React, { useEffect } from "react";
import CounselorInfo from "./components/CounselorInfo";
import './CounselorList.css';

export const CounselorListPresenter = ({
    counselors,
    acceptCounselor,
    rejectCounselor,
}) => {
    return(
        <div className="admin-counselor-list-container">
            {
                counselors.map(counselor => (
                    <div className="admin-counselor-list-element">
                        <CounselorInfo
                            counselor={counselor}
                            acceptCounselor={acceptCounselor}
                            rejectCounselor={rejectCounselor}
                        />    
                    </div>
                ))
            }
        </div>
    )
}