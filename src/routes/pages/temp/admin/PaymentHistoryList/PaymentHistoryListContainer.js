import React, { useEffect, useState } from "react";
import { PaymentHistoryListPresenter } from "./PaymentHistoryListPresenter";
import API from "../../../../api/API";

const PaymentHistoryListContainer = () => {
  const [coinHistorys, setCoinHistorys] = useState([
    {
      category: '상담',
      amount: 1000,
      order_date: '2024/01/22 13:52:35',
      payment_date: '2024/01/22 13:53:45',
      status: 'success',
      user_name: 'test_user1',
      user_id: 'test1',
      counselor_name: 'test1',
      counselor_id: 'test1',
    },
    {
      category: '상담',
      amount: 2000,
      order_date: '2024/01/23 13:52:35',
      payment_date: '2024/01/23 13:53:45',
      status: 'success',
      user_name: 'test_user2',
      user_id: 'test2',
      counselor_name: 'test2',
      counselor_id: 'test2',
    },
    {
      category: '상담',
      amount: 2000,
      order_date: '2024/01/23 13:52:35',
      payment_date: '2024/01/23 13:53:45',
      status: 'cancel',
      user_name: 'test_user2',
      user_id: 'test2',
      counselor_name: 'test2',
      counselor_id: 'test2',
    },
    {
      category: '상담',
      amount: 3000,
      order_date: '2024/01/25 13:23:15',
      payment_date: '2024/01/25 13:23:25',
      status: 'success',
      user_name: 'test_user3',
      user_id: 'test3',
      counselor_name: 'test1',
      counselor_id: 'test1',
    },
  ]);

  useEffect(() => {
    (async () => {
      const {resultData} = await API.getCoinHistorys();

      console.log(resultData);

      // TODO: API연결 필요
      setCoinHistorys(resultData);
    })();
  }, []);

  return(
      <PaymentHistoryListPresenter
        coinHistorys={coinHistorys}
    />
  )
}

export default PaymentHistoryListContainer;