import React from "react";
import { Button  } from "antd";
import './PayCoin.css'

export const PayCoin = () => {
    return (
        <div className="pay-coin-container">
            <span className="title">일반 결제</span>
            <div className="pay-method-buttons">
                <Button>
                    신용카드
                </Button>
                <Button>
                    휴대폰 결제
                </Button>
                <Button>
                    기타
                </Button>
            </div>
            <div className="pay-button">
                <Button>
                    결제하기
                </Button>
            </div>
        </div>
    )
}