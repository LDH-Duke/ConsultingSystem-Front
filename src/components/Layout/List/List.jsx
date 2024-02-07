import React from 'react'
import { Modal, Button } from 'antd';
import { InputComponent } from '../Input/InputComponent';
import { ModalComponent } from '../Modal/Modal';
import { Link } from 'react-router-dom';
import './List.css'

export const List = ({
    counselors,
    selectCounselor,
    moveCounselorDetail,

    favorites,
    addFavorite,
    deleteFavorite,

    isModalOpen,
    modalOpen,
    handleOk,
    handleCancel,
    modalItems,
    modalButtons,

    connectConsultingV1,
    connectConsultingV2,
}) => {
    // const counselors = [
    //     {
    //         nickname: '홍단',
    //         price: '1200',
    //         tag: ['#친절함', '#편함', '#재밌음'],
    //         url: ''
    //     },
    //     {
    //         nickname: '홍단',
    //         price: '1200',
    //         tag: ['#친절함', '#편함', '#재밌음'],
    //         url: ''
    //     },
    //     {
    //         nickname: '홍단',
    //         price: '1200',
    //         tag: ['#친절함', '#편함', '#재밌음'],
    //         url: ''
    //     },
    //     {
    //         nickname: '홍단',
    //         price: '1200',
    //         tag: ['#친절함', '#편함', '#재밌음'],
    //         url: ''
    //     },
    //     {
    //         nickname: '홍단',
    //         price: '1200',
    //         tag: ['#친절함', '#편함', '#재밌음'],
    //         url: ''
    //     },
    // ]
    return (
        <div className='list-container'>
            {
                counselors &&
                counselors.map((counselor, idx) => {
                    console.log(favorites.filter(favorite => favorite.counselor_id === counselor['counselor.id']))
                    return (
                        <div className={`list ${idx}`} key={`list ${idx}`}>
                            <div className='list-img'  onClick={() => moveCounselorDetail(counselor['counselor.id'], counselor.id)}>
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
                                    favorites.filter(favorite => favorite.counselor_id === counselor['counselor.id']).length ?
                                        <button className='list-btn' onClick={() => { deleteFavorite(counselor['counselor.id']) }}>취소</button> :
                                        <button className='list-btn' onClick={() => { addFavorite(counselor.counselor_id) }}>좋아요</button>
                                }
                            </div>
                            <ModalComponent
                                title={'상담하기'}
                                open={isModalOpen}
                                handleCancel={handleCancel}
                                items={modalItems}
                                buttons={modalButtons}
                            />
                            {/* <Modal
                                title='상담하기'
                                open={isModalOpen}
                                onOk={handleOk}
                                okButtonProps={{
                                    style: {
                                        display: 'none'
                                    }
                                }}
                                onCancel={handleCancel}
                                cancelText='닫기'
                            >
                                <div className="counselor-infos">
                                    <div className="counselor-info">
                                        <span>예명</span>
                                        <InputComponent
                                            isReadonly={true}
                                            value={selectCounselor['counselor.name']}
                                        />
                                    </div>
                                    <div className="counselor-info">
                                        <span>가격</span>
                                        <InputComponent
                                            isReadonly={true}
                                            value={selectCounselor.price}
                                        />
                                    </div>
                                </div>
                                <Button onClick={connectConsultingV1}>상담 V1 연결</Button>
                                <Button onClick={connectConsultingV2}>상담 V2 연결</Button>
                            </Modal> */}
                        </div>
                    )
                })
            }
        </div>
    )
}
