import React from 'react'
import './EditProfile.css'
import Title from '../../../components/Title';
import { Tabs} from 'antd';

export const EditProfilePresenter = ({
    items
}) => {
    
    return (
        <div className='editprofile-container'>
            <div className='editprofile-wrap'>
                <div className='Title'>
                    {/* <Header /> */}
                    <Title title={"회원정보 수정"} />
                </div>
                <div className='tab-container'>
                    <Tabs items={items}>

                    </Tabs>
                </div>
            </div>
        </div>
    )
}