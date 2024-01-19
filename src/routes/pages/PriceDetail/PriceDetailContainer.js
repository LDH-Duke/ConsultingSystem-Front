import { useState } from "react";
import { PriceDetailPresenter } from "./PriceDetailPresenter";

const PriceDetailContainer = () => {
    const [name] = useState('클로이');
    const [category] = useState('진로');
    const [consulting] = useState('전화상담');
    const [duringtime] = useState('30');
    const [coin] = useState('900');
    const [time] = useState('01-09(화) 16:06')

    return(
        <PriceDetailPresenter name = {name} category = {category} consulting = {consulting}
        duringtime = {duringtime} coin = {coin} time = {time}/>
    )
}

export default PriceDetailContainer;