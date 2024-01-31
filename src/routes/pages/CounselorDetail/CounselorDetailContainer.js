import React, { useState } from 'react'
import { CounselorDetailPresenter } from './CounselorDetailPresenter'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import API from '../../../api/API';

const CounselorDetailContainer = ({

}) => {

  /**
   * 임시 데이터
   */
  const [counselor, setCounselor] = useState(
    {
      counselor_id: 1,
      name: '허관',
      category: '진로',
      price: 1000,
      rank: '브론즈',
      status: false,
      introduce: '가'
    }
  );

  const onbuySubmit = async() => {
    const postpuyproductinfo = await API.postbuyproduct();
  }

  // const getReview


  // Tab
  const items = [
    {
      key: '1',
      label: '서비스 공지',
      children: '서비스 공지',
    },
    {
      key: '2',
      label: '서비스 소개',
      children: '허관',
    },
    {
      key: '3',
      label: '상담사 정보',
      children: <div className='aa'>aaa</div>,
    },
    {
      key: '4',
      label: '후기',
      children:
        <div className='counselor-tab-container'>
          <div className='counselor-tab-wrap'>
            <div className='counselor-tab-box'>
              <Link to={`/writereview/${counselor.counselor_id}`}><Button>후기 작성하기</Button></Link>
            </div>
          </div>
        </div>
    },
    {
      key: '5',
      label: '상담 상품',
      children: <Button onClick={onbuySubmit}>상품구매하기</Button>,
    },
  ];

  return (
    <CounselorDetailPresenter counselor={counselor} items={items} />
  )
}

export default CounselorDetailContainer