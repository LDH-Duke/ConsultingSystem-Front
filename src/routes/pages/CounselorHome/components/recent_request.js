import React, {useState} from "react";
import { Button } from "antd";
import "./recent_request.css"


const RecentRequest = (props) => {
    const {name, buttonAccept, buttonReject}  = props
    return (

            <div className="Recent-request">
                <div className="Recent-request-firstform">
                    <div className="Client-name">
                        {name}<span className="Customer">고객님</span>
                    </div>
                </div>
                
                <div className="Recent-request-category" style={{ color: 'black', fontWeight: 'bold' }}>
                    전화상담, 타로사주
                </div>
                <div className="Recent-request-category">상담내용</div>
                <div className="Recent-request-secondform">
                    <div className="request-contents">

                    </div>
                </div>
                <div className="Recent-request-thirdform">
                    <Button className="accept-button" onClick={buttonAccept}>
                        수락하기
                        </Button>
                    <Button className="reject-button" onClick={buttonReject}>
                        거절하기
                        </Button>
                </div>
            </div>

    );
}

export default RecentRequest;