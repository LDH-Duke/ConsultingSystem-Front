import React from 'react'
import { Row, Col } from 'antd'
import { CommonBox } from './components/CommonBox'
import './CounselorBodyLayout.css'

export const CounselorBodyLayout = () => {
    return (
        <div className='counselor-body-layout'>
            <Row gutter={8}>
                <Col xl={12}><CommonBox title={'상품 등록'} url={'/counselor/addproduct'}/></Col>
                <Col xl={12}><CommonBox title={'문의 내역 확인'} url={'/counselor/ask/history'}/></Col>
            </Row>
            <Row>
                <Col xl={24}><CommonBox title={'상담 내역'} url={'/counselor/consultinghistory'}/></Col>
            </Row>
            <Row gutter={8}>
                <Col xl={8}><CommonBox title={'프로필 수정'} url={'/counselor/profile'}/></Col>
                <Col xl={8}><CommonBox title={'코인 환전'} url={'/counselor/coin'}/></Col>
                <Col xl={8}><CommonBox title={'관리자 문의'} url={'/askadmin/counselor'}/></Col>
            </Row>
        </div>
    )
}
