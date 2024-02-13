import React from "react";
import { Tabs } from "antd";
import './CounselorIntro.css';
import CounselorReview from "./CounselorReview";
import CounselorTabContent from "./CounselorTabContent";

export const CounselorIntro = ({
  counselor,
  counselor_id,
  reviews
}) => {
  const items = [



    /**
     * 서비스공지
     */
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



    /**
     * 서비스소개
     */
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



    /**
     * 상담사정보
     */
    {
      key: '3',
      label: '상담사정보',
      children:
        <div>
          <CounselorTabContent
            title={'상담사정보'}
            content={counselor.introduce}
          />
        </div>
    },



    /**
     * 후기
     */
    {
      key: '4',
      label: '후기',
      children:
        <div>
          <CounselorReview
            counselor_id = {counselor_id}
            reviews={reviews}
          />
        </div>
    },



    /**
     * 상담 상품
     */
    {
      key: '5',
      label: '상담 상품',
      children:
        <div>
          asdf
        </div>
    },



    /**
     * 1:1 문의
     */
    {
      key: '6',
      label: '1:1문의',
      children:
        <div>
          div
        </div>
    }
  ];

  return (
    <div className="counselor-intro-container">
      <Tabs items={items} />
    </div>
  )
}