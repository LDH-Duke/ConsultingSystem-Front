import React, { useState } from "react";
import { CoinPresenter } from "./CoinPresenter";

const CoinContainer = () => {
    const [price] = useState([10000, 30000, 50000, 100000, 200000, 300000])
    const [coin] = useState([10000, 30000, 50000, 100000, 200000, 300000])
    
    return(
        <CoinPresenter price = {price} coin = {coin} />
    )
}

export default CoinContainer;