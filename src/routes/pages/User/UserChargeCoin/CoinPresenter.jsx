import React, { useEffect } from "react";
import './Coin.css';
import Layout from '../../../../components/Layout/Layout';
import { CoinInfo } from "./components/CoinInfo";
import { PayCoin } from "./components/PayCoin";

export const CoinPresenter = ({
    coins,
    selectCoinInfo,

    selectCoin,
}) => {
    return (
        <Layout nav={1}>
            <div className="coin-container">
                <CoinInfo
                    coins={coins}
                    selectCoinInfo={selectCoinInfo}
                    
                    selectCoin={selectCoin}
                />
                <PayCoin/>
            </div>
        </Layout>
    )
}