import React, { useEffect } from "react";
import './Coin.css';
import Layout from '../../../../components/Layout/Layout';
import { CoinInfo } from "./components/CoinInfo";
import { PayCoin } from "./components/PayCoin";
import styled from "styled-components";

const CoinContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    width: 60%;

    margin: 0 auto;
`;

export const CoinPresenter = ({
    coins,
    selectCoinInfo,

    selectCoin,
}) => {
    return (
        <Layout nav={1}>
            <CoinContainer>
                <CoinInfo
                    coins={coins}
                    selectCoinInfo={selectCoinInfo}
                    
                    selectCoin={selectCoin}
                />
                <PayCoin/>
            </CoinContainer>
        </Layout>
    )
}