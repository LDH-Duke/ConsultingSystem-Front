import React from 'react';
import './Counselor.css';
import { Button , Form, Tabs } from 'antd';
import { Link } from 'react-router-dom';

export const CounselorPresenter = ({
    items,
    counselorInfo
}) => {
    
    return (
        <div className='counselor-container'>
            <div className='counselor-wrap'>
                <div className='counselor-imgbox'>
                    <p>asdf</p>
                </div>
                <div className='profile'>
                    <div className='profile-detail'>
                        <div className='profile-category'>{counselorInfo[0].category}</div>
                        <div className='profile-name'>{counselorInfo[0].name}</div>
                        <div className='profile-rank'>{counselorInfo[0].rank}</div>
                    </div>
                    <div className='profile-button'>
                        <Form.Item>
                            <Link to='/donation'><Button>선물하기</Button></Link>
                        </Form.Item>
                        <Form.Item>
                            <Link to='/question'><Button>문의하기</Button></Link>
                        </Form.Item>
                        <Form.Item>
                            <Button>상담하기</Button>
                        </Form.Item>
                    </div>
                </div>
                <div className='tab-contatiner'>
                    <Tabs items={items}>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}