import React, { useState } from 'react'
import { CounselorDetailPresenter } from './CounselorDetailPresenter'

const CounselorDetailContainer = () => {


    // 예시 데이터
    const counselorInfo = [
        {
            id : 1,
            name : '알레시',
            category : '진로',
            rank : '브론즈'
        }
    ]

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
          children: <div className='aa'>aaa</div>,
        }
      ];

    return (
        <CounselorDetailPresenter counselorInfo={counselorInfo} items={items} />
    )
}

export default CounselorDetailContainer