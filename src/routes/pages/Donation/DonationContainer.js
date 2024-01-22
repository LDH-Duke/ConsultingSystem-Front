import React, { useEffect, useState } from 'react'
import { DonationPresenter } from './DonationPresenter'
import { Input } from 'antd';
import API from '../../../api/API';
import { useParams } from 'react-router-dom';

const DonationContainer = () => {
    const { TextArea } = Input;
    
    const [user, setUser] = useState([])
    const [coin, setCoin] = useState([])
    const [info, setInfo] = useState([])
    const params = useParams();

    useEffect(() => {
        const userinfo = API.getuser()
        setUser(userinfo)
    })

    const onSubmit = () =>  {
        const donationinfo = API.postdonation({coin, info, user_id: user.user_id, counselor_id: params.counselor_id});
    }

    return (
        <DonationPresenter TextArea={TextArea} user={user}/>
    )
}

export default DonationContainer