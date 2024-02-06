import React from "react";
import './Exchange.css'
import SubHeader from "../../../components/SubHeader";
import { Button } from "antd";
import Coin from "./components/Coin";

export const ExchangePresenter = ({

}) => {
    return (
        <div className="Exchange-Container">
            <div className="Exchange-wrap">
                <SubHeader/>
                <div className="change-coin">
                    <Coin/>
                </div>
            </div>
        </div>
    )
}