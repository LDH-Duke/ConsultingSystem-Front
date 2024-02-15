import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import { InputComponent } from '../Input/InputComponent';
import { ModalComponent } from '../Modal/Modal';
import { Link, useNavigate } from 'react-router-dom';
import './List.css'
import API from '../../../api/API';

export const List = ({
    counselors,
    moveCounselorDetail,

    favorites,
    addFavorite,
    deleteFavorite,

    // isModalOpen,
    // modalOpen,
    // handleOk,
    // handleCancel,
    // modalItems,
    // modalButtons,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectCounselor, setSelectCounselor] = useState('');
    const navigate = useNavigate();

    /**
     * 상담 연결 (V1)
     */
    const connectConsultingV1 = async () => {
        const request = await API.getCounsultRequest(selectCounselor.counselor_id)
        console.log(request)

        if (!request.status) {
            console.log('에러')
        }

        if (request.status.is_user.total_coin < (selectCounselor.price * 5)) {
            console.log('잔액부족')
        }

        //socket 연결 부분
        //consulting api 연동 부분


        setIsModalOpen(false);
        // Consulting V1 이동
        navigate('/consultingv1');
    }

    /**
     * 상담 연결 (V2)
     */
    const connectConsultingV2 = (counselor_id) => {
        setIsModalOpen(false);
        // Consulting V2 이동
        navigate('/consultingv2');
    }


    /**
       * 모달 버튼
       */
    const modalButtons = [
        {
            text: '상담 V1 연결',
            onClick: connectConsultingV1,
        },
        {
            text: '상담 V2 연결',
            onClick: connectConsultingV2,
        },
    ];

    /**
     * 모달 오픈
     */
    const modalOpen = (counselor) => {
        setSelectCounselor(counselor);
        setIsModalOpen(true);
        setModalItems([
            {
                text: '예명',
                value: counselor['counselor.nickname'],
            },
            {
                text: '가격',
                value: counselor.price,
            },
        ])
    }

    /**
     * 모달 아이템
     */
    const [modalItems, setModalItems] = useState([
        {
            text: '',
            value: '',
        },
    ]);



    return (
        <div className='list-container'>
            {
                counselors &&
                counselors.map((counselor, idx) => {
                    return (
                        <div className={`list ${idx}`} key={`list ${idx}`}>
                            <div className='list-img' onClick={() => moveCounselorDetail(counselor['counselor.id'], counselor.price)}>
                                <img src={counselor['counselor.img']} alt='이미지'></img>
                            </div>
                            <div className='list-info'>
                                <span>{counselor['counselor.nickname']}</span>
                                <span>{counselor.price}</span>
                                {/* <span>{counselor.tag}</span> */}
                                <ul>
                                    {
                                        counselor.tag &&
                                        counselor.tag.map((tag, idx) => {
                                            return (
                                                <span className={`tag ${idx}`} key={`tag ${idx}`}>{tag}</span>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="list-btns">
                                <button className='list-btn' onClick={() => modalOpen(counselor)}>상담하기</button>

                                {
                                    favorites &&
                                        favorites.filter(favorite => favorite.counselor_id === counselor['counselor.id']).length ?
                                        <button className='list-btn' onClick={() => { deleteFavorite(counselor['counselor.id']) }}>취소</button> :
                                        <button className='list-btn' onClick={() => { addFavorite(counselor.counselor_id) }}>좋아요</button>
                                }
                            </div>
                        </div>
                    )
                })
            }
            <ModalComponent
                title={'상담하기'}
                open={isModalOpen} //열림 여부
                cancelText={'닫기'}
                items={modalItems}
                selectCounselor={selectCounselor}

                buttons={modalButtons}
                handleCancel={() => setIsModalOpen(false)}
            >
            </ModalComponent>
        </div>
    )
}
