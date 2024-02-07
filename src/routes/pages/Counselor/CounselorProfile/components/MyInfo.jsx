import React from "react";
import "./MyInfo.css";

export const MyInfo = ({
    counselor,
    setCounselor,
    onSubmit
}) => {
    return(
        <div className="myinfo-container">
            <div className="myinfo-title">
                <h4>내 정보</h4>
            </div>
            <div className="myinfo-form">
                <div className="myinfo-input">
                    <span>이름</span>
                    <input type="text"
                        value={counselor.name}
                        onChange={(e) => {
                            const name = e.target.value;
                            setCounselor(info => {
                                return {...info, name};
                            })
                        }}
                    />
                </div>
                <div className="myinfo-input">
                    <span>예명</span>
                    <input type="text" 
                        value={counselor.nickname}
                        onChange={(e) => {
                            const nickname = e.target.value;
                            setCounselor(info => {
                                return {...info, nickname};
                            })
                        }}
                    />
                </div>
                <div className="myinfo-input">
                    <span>이메일</span>
                    <input type="text" 
                        value={counselor.email}
                        onChange={(e) => {
                            const email = e.target.value;
                            setCounselor(info => {
                                return {...info, email};
                            })
                        }}
                    />
                </div>
                <div className="myinfo-input">
                    <span>휴대전화</span>
                    <input type="text" 
                        value={counselor.phone} 
                        onChange={(e) => {
                            const tel = e.target.value;
                            setCounselor(info => {
                                return {...info, tel};
                            })
                        }}
                    />
                </div>
                <div className="myinfo-button">
                    <button onClick={onSubmit}>수정하기</button>
                </div>
            </div>
        </div>   
    )
}