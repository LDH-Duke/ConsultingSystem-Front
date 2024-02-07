import React from "react";
import { Link } from "react-router-dom";
import { ModalComponent } from "../../../../../components/Layout/Modal/Modal";
import example from './example.png';
import './CounselorInfo.css';

export const CounselorInfo = ({
    counselor,
    
    isModalOpen,
    modalOpen,
    handleCancel,
    modalItems,
    modalButtons,
}) => {
    return (
        <div className="counselor-info-container">
            <div className="counselor-image">
                <img src={example} alt="상담사 이미지" />
            </div>

            <div className="counselor-info-box">
                <div className="counselor-info">
                    <span className="counselor-category">분류</span>
                    <span className="counselor-nickname">{counselor.nickname}</span>
                    <span className="counselor-rating">등급</span>
                </div>

                <div className="counselor-links">
                    <Link to={'/user/donation'}>선물하기</Link>
                    <Link>문의하기</Link>
                    <button className="consulting-button" onClick={modalOpen}>상담하기</button>
                    <ModalComponent
                        title={'상담하기'}
                        open={isModalOpen}
                        handleCancel={handleCancel}
                        items={modalItems}
                        buttons={modalButtons}
                    />
                </div>
            </div>
        </div>
    )
}