import React from "react";
import { Button } from '../../../../../../components/Layout/Button/Button';
import './ManagePayment.css'

export const ManagePaymentPresenter = ({
    coinHistorys
}) => {
    return (
        <table className="coinHistory-table">
            <thead>
                <tr>
                    <th>순번</th>
                    <th>주문 상품</th>
                    <th>결제 코인</th>
                    <th>주문 날짜</th>
                    <th>결제 날짜</th>
                    <th>결제 상태</th>
                    <th>결제자</th>
                    <th>결제자 아이디</th>
                    <th>상담사 예명</th>
                    <th>상담사 아이디</th>
                </tr>
            </thead>
            <tbody>
                {
                    coinHistorys &&
                    coinHistorys.map((coinHistory, idx) => (
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{coinHistory.category}</td>
                            <td>{coinHistory.amount}</td>
                            <td>{coinHistory.order_date}</td>
                            <td>{coinHistory.payment_date}</td>
                            <td>
                                {
                                    coinHistory.payment_date === 'success' ?
                                        '성공' :
                                        '취소'
                                }
                            </td>
                            <td>{coinHistory.user_name}</td>
                            <td>{coinHistory.user_id}</td>
                            <td>{coinHistory.counselor_name}</td>
                            <td>{coinHistory.counselor_id}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}