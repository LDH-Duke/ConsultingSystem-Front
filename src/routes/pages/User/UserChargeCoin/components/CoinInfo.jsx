import React from "react";
import { CoinTable } from "./CoinTable";
import './CoinInfo.css'

export const CoinInfo = ({
    coins,
    selectCoinInfo,

    selectCoin,
}) => {
    return (
        <div className="coin-container">
            <div className="coin-info-container">
                <span className="title">코인충전 결제금액 선택 (VAT별도)</span>

                <CoinTable coins={coins} selectCoin={selectCoin}/>
                
                <div className="show-coin-info">
                    <span>
                        결제 금액: <span className="show-coin">{selectCoinInfo.payCoin}</span>원
                    </span>
                    <span>
                        충전 코인: <span className="show-coin">{selectCoinInfo.chargeCoin}</span>코인
                    </span>
                </div>
            </div>
        </div>
    )
}