import React from "react";
import "./DonationForm.css";

const DonationForm = ({
}) => {
    return (
        <div className="user-donation-container">
            <div className="user-donation-box">
                <h1>후원할 코인</h1>
                <div className="user-donation-coin">
                    <input
                        type="text"
                        placeholder="후원할 코인을 입력해주세요." />
                </div>
                <div className="user-donation-retain">
                    <p>보유 코인:</p>
                </div>
                <div className="user-charge-coin">
                    <a href="/">코인 충전하러가기</a>
                </div>
                <div className="user-donation-text">
                    <textarea
                        id="message"
                        name="message"
                        placeholder="후원 메시지를 입력해주세요."
                        maxlength="128">
                    </textarea>
                </div>
                <div className="user-donation-button-box">
                    <button onClick={() => { "text" }}>
                        후원하기
                    </button>
                </div>
            </div>
        </div>
    )
};

export default DonationForm;