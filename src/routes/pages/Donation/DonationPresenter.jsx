import React from 'react'
import './Donation.css'
import { Button, Input, Flex } from 'antd'; 
import Title from '../../../components/Title';

export const DonationPresenter = ({ TextArea }) => {
    
    return (
        <div className='donation-container'>
            <div className='donation-wrap'>
                {/* <Header /> */}
                <Title title={'선물하기'} />
                <div className='donation-box'>
                    <div className='donation-content-box'>
                        <div className='donation-input-box'>
                            {'코인 선물'}
                            <Input placeholder={'코인'} />
                        </div>
                        <div className='donation-coin-box'>
                            <div className='donation-coin-content'>
                                {'보유 코인: '}
                                {10000}
                            </div>
                            <div className='donation-button-content'>
                                <Button>코인 충전 하러가기</Button>
                            </div>
                        </div>
                        <div className='donation-textarea-box'>
                            <div className='donation-textarea-content'>
                                {'텍스트 내용'}
                                <Flex vertical gap={32}>
                                    <TextArea showCount maxLength={100} />
                                </Flex>
                            </div>
                        </div>
                        <div className='donation-button-box'>
                            <Button>선물하기</Button>
                            <Button>취소</Button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}