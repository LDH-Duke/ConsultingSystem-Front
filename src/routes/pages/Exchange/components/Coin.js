import React from "react";
import "./style/Coin.css"
import Formname from "../../../../components/Formname";
import { Form, Input } from "antd";

const Coin = (props) => {
    return (
        <div className="available">
            <div className="available-coin">환전가능금액</div>
            {/* 현재코인 받아서 계산 */}
            <div className="available-price">1,000,000</div>
            <div className="exchange-form">
                <Form>
                    <Form.Item>
                        <Formname name = {'코인'}/>
                        <Input placeholder="코인 입력"/>
                    </Form.Item>
                </Form>
                <Form>
                    <Form.Item>
                        <Formname name = {'환전 금액'}/>
                        <Input placeholder="코인 입력"/>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Coin;