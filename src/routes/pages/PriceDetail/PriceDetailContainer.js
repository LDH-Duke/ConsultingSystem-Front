import React, { useEffect, useState } from 'react';
import { PriceDetailPresenter } from "./PriceDetailPresenter";
import API from '../../../api/API'

const PriceDetailContainer = () => {
    const [name] = useState('클로이');
    const [category] = useState('진로');
    const [consulting] = useState('전화상담');
    const [duringtime] = useState('30');
    const [coin] = useState('900');
    const [time] = useState('01-09(화) 16:06')

    const [user, setUser] = useState([]);

    useEffect(() => {
        const priceinfo = API.getPricedetail(user.id);
    }, [])

    return(
        <PriceDetailPresenter name = {name} category = {category} consulting = {consulting}
        duringtime = {duringtime} coin = {coin} time = {time} user={user} />
    )
}

export default PriceDetailContainer;