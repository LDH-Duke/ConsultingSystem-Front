import React from "react";
import { Tabs } from "antd";
import './CounselorIntro.css';

export const CounselorIntro = ({
    counselor,
    counselor_id
}) => {
    const items = [
        {
          key: '1',
          label: 'Notice',
          children: <div>adfsdfsaffdaf</div>,
        },
        {
          key: '2',
          label: 'Introduce',
        //   children: <DetailIntroduceContainer />,
          children: <div>asdf</div>
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
                    sadf
                  </div>
                  {/* <Link to={`/writereview/${counselor_id}`}><Button>후기 작성하기</Button></Link>
                  <ReviewCard
                    reviews={reviews}
                    counselor={counselor} */}
                </div>
              </div>
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
            <Tabs items={items}/>
        </div>
    )
}