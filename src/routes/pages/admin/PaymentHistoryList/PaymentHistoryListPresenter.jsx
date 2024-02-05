import React, { useEffect } from "react";
import './PaymentHistoryList.css';

export const PaymentHistoryListPresenter = ({
    coinHistorys,
}) => {
    return(
        <div className="admin-history-list-container">
            {
                coinHistorys.map(history => (
                    <div className="admin-history-list-element">
                        <div className="admin-history-infos">
                            <span className="admin-history-category">
                                주문 상품: {history.category}
                            </span>
                            <span className="admin-history-amount">
                                결제 코인: {history.amount}
                            </span>
                            <span className="admin-history-order-date">
                                주문 날짜: {history.order_date}
                            </span>
                            <span className="admin-history-payment-date">
                                결제 날짜: {history.payment_date}
                            </span>
                            <span className='admin-history-status'>
                                결제 상태: <span className={history.status}>
                                                {
                                                    history.status === 'success' ?
                                                        '성공' :
                                                        '취소'
                                                }
                                            </span>
                            </span>
                            <span className="admin-history-user-name">
                                결제자: {history.user_name}
                            </span>
                            <span className="admin-history-user-id">
                                결제자 아이디: {history.user_id}
                            </span>
                            <span className="admin-history-counselor-name">
                                상담사 예명: {history.counselor_name}
                            </span>
                            <span className="admin-history-counselor-name">
                                상담사 아이디: {history.counselor_name}
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}