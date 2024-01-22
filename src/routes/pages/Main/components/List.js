import React, {useState} from "react";
import { Link } from 'react-router-dom';
import './style/List.css';
import example from './img/example.png';
import Category from "./Category";
import {Button, Modal} from 'antd'

/**
 * List
 */

const List = (props) => {
    const {name} = props
    const {price} = props
    const {introduce} = props

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return(
        <div className="list">
            <div className="list-top">
                <div className="list-top-name">
                    <div className="info">
                    <span><Category category={'진로'} /></span>
                    <span>{name}</span>
                    </div>
                    <div className="icon">
                        <span>추가</span>
                        <span>수락</span>
                    </div>
                </div>
            </div>
            <div className="list-bottom">
                <Link to='/counselorDetail'><img src={example} alt=""></img></Link>
                <div className="list-bottom-info">
                    <div className="list-bottom-info-top">
                        <div className="list-detail">
                            <span>등급명</span>
                            <span>가격 : {price} 원</span>
                            <span>{introduce}</span>
                        </div>
                        <div className="list-button">
                            <Button type="primary" onClick={showModal}>
                                상담하기
                            </Button>
                            <div className="list-modal">
                                <Modal style={{width: '100%'}} open={isModalOpen} onOk ={handleOk} onCancel={handleCancel}>
                                    <div className="modal-detail">
                                        <div className="modal-top">
                                            <div className="img"></div>
                                            <div className="all-info">
                                                <div className="info">
                                                    <Category category = {'진로'} />
                                                    <span>{name}</span>
                                                </div>
                                            <div className="info-select">
                                                <span>상담 방법을 선택해 주세요</span>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="modal-button">
                                            <Button>코인 상담하기</Button>
                                            <span>코인 상담요금: {price}코인 30초</span>
                                            <Button>다른 상담 방법</Button>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="list-bottom-info-bottom">
                        <div className="accept">
                            <span>상담가능</span>
                        </div>
                        <div className="message">
                            <span>상담 횟수 (16)</span>
                            <span>문의 개수 (16)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List