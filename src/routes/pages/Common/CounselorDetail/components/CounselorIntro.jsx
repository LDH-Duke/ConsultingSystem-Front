import React from "react";
import { Tabs } from "antd";
import './CounselorIntro.css';
import "./CounselorReview";
import CounselorReview from "./CounselorReview";
import CounselorTabContent from "./CounselorTabContent";

export const CounselorIntro = ({
  counselor,
  counselor_id,
  reviews
}) => {
  const items = [
    {
      key: '1',
      label: '서비스공지',
      children:
        <div>
          <CounselorTabContent
            title={'서비스공지'}
            content={counselor.notice}
          />
        </div>
    },
    {
      key: '2',
      label: '서비스소개',
      children:
        <div>
          <CounselorTabContent
            title={'서비스소개'}
            content={counselor.introduce}
          />
        </div>
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
        <div>
          <CounselorReview
            reviews={reviews}
          />

          {/* <Link to={`/writereview/${counselor_id}`}><Button>후기 작성하기</Button></Link>
                  <ReviewCard
                    reviews={reviews}
                    counselor={counselor} /> */}
        </div>

    },
    {
      key: '5',
      label: '상담 상품',
      children:
        <div>
          {/* <ProductListContainer /> */}
          asdf
        </div>,
    },
    {
      key: '6',
      label: '1:1문의',
      children: <div>div</div>
    },
  ];

  return (
    <div className="counselor-intro-container">
      <Tabs items={items} />
    </div>
  )
}