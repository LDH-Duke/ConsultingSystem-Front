import React, { useEffect, useState } from "react";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import { CoinPresenter } from "./CoinPresenter";

const CoinContainer = () => {
  const coins = [10000, 30000, 50000, 100000, 200000, 300000];
  const [selectCoinInfo, setSelectCoinInfo] = useState({
    payCoin: 0,
    chargeCoin: 0,
  });

  const selectCoin = (index) => {
    const coin = coins[index];
    setSelectCoinInfo({
      payCoin: coin,
      chargeCoin: coin,
    })
  }

  return (
    <CoinPresenter
      coins={coins}
      selectCoinInfo={selectCoinInfo}

      selectCoin={selectCoin}
    />
  )
}

export default CoinContainer;