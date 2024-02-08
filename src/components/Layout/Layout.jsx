import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { Footer } from './Footer/Footer'
import { Nav } from './Nav/Nav'
import { BottomNav } from './BottomNav/BottomNav'
import { Banner } from './Banner/Banner'
import cookie from '../../cookie';
import './Layout.css'


const Layout = ({ children, nav }) => {
    const [id, setId] = useState(null);
    const [userType, setUserType] = useState('');

    useEffect(() => {
        setId(cookie.getCookie('id'));
        setUserType(cookie.getCookie('userType'));
    }, []);

    const signOut = () => {
        cookie.remove('id', { path: '/' }, 1000);
        cookie.remove('token', { path: '/' }, 1000);
        cookie.remove('userType', { path: '/' }, 1000);
        setId(null);
        setUserType('');
    }

    return (
        <div className='layout-container'>
            <div className='nav'>
                <Nav nav={userType !== '상담사'} id={id} signOut={signOut} />
            </div>
            <div className='body'>
                {children}
            </div>
            <div className='footer'>
                <BottomNav />
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
