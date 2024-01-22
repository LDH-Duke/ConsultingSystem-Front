import React, { useState } from "react"
import './Coin.css'
import Title from "../../../components/Title"
import { Button, Form } from "antd"

export const CoinPresenter = ({
    price,
    coin
}) => {
    const [selectedRadio, setSelectedRadio] = useState(null);

    const handleRadioChange = (index) => {
        setSelectedRadio(index);
    };

    return (
        <div className='coin-container'>
            <div className="coin-wrap">
                <div className='title'>
                    {/* <Header /> */}
                    <Title title={'코인충전'} />
                </div>
                <div className="form">
                    <h3>코인충전 결제금액 선택 (VAT별도)</h3>
                    <div className="coin-table">
                        <table>
                            <thead>
                                <th>구분</th>
                                <th>결제금액(VAT 별도)</th>
                                <th>충전코인</th>
                            </thead>
                            <tbody>
                                {
                                    price.map(function (a, i) {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <input
                                                        type='radio'
                                                        name='coinRadio'
                                                        checked={selectedRadio === i}
                                                        onChange={() => handleRadioChange(i)} />
                                                </td>
                                                <td>{price[i]}원</td>
                                                <td>{coin[i]}코인</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="coin-info">
                        <p>결제 금액: <span>{selectedRadio !== null ? `${price[selectedRadio]}` : 0}</span>원</p>
                        <p>충전 코인: <span>{selectedRadio !== null ? `${coin[selectedRadio]}` : 0}</span>코인</p>
                    </div>
                    <div className="price-form">
                        <h4>일반 결제</h4>
                        <div className="price-choice">
                            <Form.Item>
                                <Button>신용카드</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button>휴대폰 결제</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button className="last">기타</Button>
                            </Form.Item>
                        </div>
                        <div className="price">
                            <Form.Item>
                                <Button>결제하기</Button>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="warning">
                        <h4>주의 사항</h4>
                        <div className="warning-info">
                            <p>주의 사항 내용 작성</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}