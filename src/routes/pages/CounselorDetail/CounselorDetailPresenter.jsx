import React from 'react';
import './CounselorDetail.css';
import { Button , Form, Tabs, Modal } from 'antd';
import { Link } from 'react-router-dom';

export const CounselorDetailPresenter = ({
    items,
    counselor,
}) => {

    const { category, name, rank, counselor_id } = counselor
    
    return (
        <div className='counselor-container'>
            <div className='counselor-wrap'>
                <div className='counselor-imgbox'>
                    <p>asdf</p>
                </div>
                <div className='profile'>
                    <div className='profile-detail'>
                        <div className='profile-category'>{category}</div>
                        <div className='profile-name'>{name}</div>
                        <div className='profile-rank'>{rank}</div>
                    </div>
                    <div className='profile-button'>
                        <Form.Item>
                            <Link to={`/donation/${counselor_id}`}><Button>선물하기</Button></Link>
                        </Form.Item>
                        <Form.Item>
                            <Link to={`/question/${counselor_id}`}><Button>문의하기</Button></Link>
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