import React, { useEffect, useState } from 'react'
import { CounselorDetailPresenter } from './CounselorDetailPresenter'
import { Button } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { API } from '../../../api';
import ReviewCard from './components/ReviewCard';

const CounselorDetailContainer = ({

}) => {

  const { counselor_id } = useParams();
  const [counselor, setCounselor] = useState();
  const [reviews, setReviews] = useState([]);


  
  useEffect(() => {
    (async () => {
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


  const onbuySubmit = async () => {
    const postpuyproductinfo = await API.postbuyproduct();
  }


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
      children: <Button onClick={onbuySubmit}>상품구매하기</Button>,
    }, 
  ];

  return (
    <CounselorDetailPresenter counselor={counselor} items={items} />
  )
}

export default CounselorDetailContainer