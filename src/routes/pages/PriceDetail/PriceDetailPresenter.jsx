import React from "react";
import './PriceDetail.css';
import Title from '../../../components/Title';
import example from './components/img/example.png';
import {Form, Button} from 'antd';

export const PriceDetailPresenter = ({
    name,
    category,
    consulting,
    duringtime,
    coin,
    time
}) =>{
    return(
        <div className="pricedetail-container">
            <div className="pricedetail-wrap">
                <div className="title">
                    {/* <Header /> */}
                    <Title title = {'결제 내역'} />
                    <div className="form">
                        <div className="form-top">
                            <div className="form-top-img">
                                <img src = {example} alt=""/>
                            </div>
                            <div className="form-top-info">
                                <div className="form-top-category">
                                    <h3>{category}</h3>
                                </div>
                                <div className="form-top-name">
                                    <p>{name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="form-bottom">
                            <div className="form-bottom-consulting">
                                <h3>{consulting}</h3>
                            </div>
                            <div className="form-bottom-list">
                                <ul>
                                    <li><h4>상담시간</h4>{duringtime}초</li>
                                    <li><h4>코인상담(선불)</h4>{coin}코인</li>
                                    <li><h4>상담시간(상담시간)</h4>{time}</li>
                                </ul>
                            </div>
                        </div>
                        <div className='form-href'>
                            <a href>리뷰 등록</a>
                            <a href>상담사 후원</a>
                        </div>
                        <div className="button">
                            <Form.Item>
                                <Button>완료</Button>
                            </Form.Item>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}