import React from 'react'
import { Row, Col } from 'antd'
import { CommonBox } from './components/CommonBox'
import './CounselorBodyLayout.css'

export const CounselorBodyLayout = () => {
    return (
        <div className='counselor-body-layout'>
            <Row gutter={8}>
                <Col xl={12}><CommonBox/></Col>
                <Col xl={12}><CommonBox/></Col>
            </Row>
            <Row>
                <Col xl={24}><CommonBox/></Col>
            </Row>
            <Row gutter={8}>
                <Col xl={8}><CommonBox/></Col>
                <Col xl={8}><CommonBox/></Col>
                <Col xl={8}><CommonBox/></Col>
            </Row>
        </div>
    )
}
