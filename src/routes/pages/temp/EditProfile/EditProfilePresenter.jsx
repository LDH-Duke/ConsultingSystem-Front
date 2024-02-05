import React from 'react'
import './EditProfile.css'
import Title from '../../../components/Title';
import { Tabs } from 'antd';

export const EditProfilePresenter = ({
    defaultTab,
    onTabChange,
    items
}) => {
    
    return (
        <div className='editprofile-container'>
            <div className='editprofile-wrap'>
                <div className='Title'>
                    <Title title={"회원정보 수정"} />
                </div>
                <div className='tab-container'>
                    <Tabs defaultActiveKey={defaultTab} onChange={onTabChange} items={items} animated={false}>
                        {items.map(item => (
                            <Tabs.TabPane key={item.key} tab={item.label}>
                                {item.children}
                            </Tabs.TabPane>
                        ))}
                    </Tabs>
                </div>
            </div>
        </div>
    )
}