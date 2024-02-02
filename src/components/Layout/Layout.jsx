import React from 'react'
import { Col, Row } from 'antd'
import { Footer } from './Footer/Footer'
import { Nav } from './Nav/Nav'
import { Banner } from './Banner/Banner'
import './Layout.css'


const Layout = ({ children }) => {
    return (
        <div className='layout-container'>
            <div className='nav'>
                <Nav />
            </div>
            <div className='body'>
                {children}
            </div>
            <div className='footer'>
                <Footer />
            </div>
            {/* <Row gutter={[16, 16]}>
                <Col xs={24} md={24} xl={24}><Nav /></Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col xs={24} md={24} xl={24}><Banner /></Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col>1</Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col xs={24} md={24} xl={24}><Footer /></Col>
            </Row> */}
        </div>
    )
}



export default Layout;
