import React from 'react'
import './Counselor.css'
import { Button , Form, Tabs } from 'antd'; 

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
                            <Button>문의하기</Button>
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