import React, { useEffect, useState } from 'react'
import { CounselorDetailPresenter } from './CounselorDetailPresenter'
import { Button } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { API } from '../../../api';
import cookie from '../../../cookie';
import ReviewCard from './components/ReviewCard';
import DetailAskListContainer from './DetailAskList';
import ProductListContainer from './ProductList/ProductListContainer';

const CounselorDetailContainer = ({

}) => {

  const { counselor_id } = useParams();
  const [counselor, setCounselor] = useState();
  const [reviews, setReviews] = useState([]);
  
  const [userId, setUserId] = useState();
  const [userCheck, setUserCheck] = useState(0);


  
  useEffect(() => {
    (async () => {

      setUserId(cookie.getCookie('id'));
      console.log(userId);

      const counselorData = await API.getCounselor(counselor_id);

      if (!counselorData) {
        console.log('상담사 정보 없음');
        return;
      }

      setCounselor(counselorData.data);

      const reviewData = await API.getReview(counselor_id);
      setReviews(reviewData.data);
      

    })();
  }, [])

  // Tab ( 나중에 수정해야함 admin 폴더 참고 )
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
              <div className='counselor-tab-content'>
              </div>
              <Link to={`/writereview/${counselor_id}`}><Button>후기 작성하기</Button></Link>
              <ReviewCard 
                reviews={reviews}
                counselor={counselor}
              />
              </div>
          </div>
        </div>
    },
    {
      key: '5',
      label: '상담 상품',
      children: 
        <div>
        <ProductListContainer />
        </div>,
    },
    {
      key: '6',
      label: '1:1문의',
      children: <DetailAskListContainer />
    },
  ];

  return (
    <CounselorDetailPresenter
      counselor={counselor}
      items={items}
      userId={userId}
    />
  )
}

export default CounselorDetailContainer