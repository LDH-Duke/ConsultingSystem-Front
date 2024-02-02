import React, { useEffect, useState } from 'react';
import { PriceDetailPresenter } from "./PriceDetailPresenter";
import API from '../../../api/API';
import cookie from '../../../cookie';

const PriceDetailContainer = ({
    navigate
}) => {
    const [name] = useState('클로이');
    const [category] = useState('진로');
    const [consulting] = useState('전화상담');
    const [duringtime] = useState('30');
    const [coin] = useState('900');
    const [time] = useState('01-09(화) 16:06')

    const [user, setUser] = useState([]);

    useEffect(() => {
        const user_id = cookie.getCookie('id')

        if (!user_id) {
            alert('로그인이 필요한 페이지입니다.')
            navigate(`/sign`);
            return
        }
        const priceinfo = API.getPricedetail(user_id);

    }, [])

    return(
        <PriceDetailPresenter name = {name} category = {category} consulting = {consulting}
        duringtime = {duringtime} coin = {coin} time = {time} user={user} />
    )
}

export default PriceDetailContainer;