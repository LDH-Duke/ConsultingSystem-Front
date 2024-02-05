import React from "react";
import './CoinTable.css'

export const CoinTable = ({
    coins,
    selectCoin,
}) => {
    return (
        <table className="coin-table">
            <thead>
                <tr>
                    <th>구분</th>
                    <th>결제금액 (VAT별도)</th>
                    <th>충전코인</th>
                </tr>
            </thead>
            <tbody>
                {
                    coins && 
                    coins.map((coin, index) => (
                        <tr>
                            <td>
                                <input
                                    type="radio"
                                    name="coinRadio"
                                    onChange={() => selectCoin(index)}
                                />
                            </td>
                            <td>{coin}원</td>
                            <td>{coin}코인</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}