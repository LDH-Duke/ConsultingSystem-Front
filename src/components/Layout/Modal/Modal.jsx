import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { InputComponent } from '../Input/InputComponent';
import './Modal.css';
import { useNavigate } from 'react-router-dom';

export const ModalComponent = ({
    title,
    open,
    selectCounselor,

    handleCancel,

    items,
    buttons,
}) => {


    return (
        <div className='modal-container'>
            <Modal
                title={title}
                open={open}
                okButtonProps={{
                    style: {
                        display: 'none'
                    }
                }}
                onCancel={handleCancel}
                cancelText='닫기'
            >
                <div className="modal-items">
                    {
                        items &&
                        items.map(item => (
                            <div className="modal-item">
                                <span>{item.text}</span>
                                <InputComponent
                                    isReadonly={true}
                                    value={item.value}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="modal-buttons">
                    {
                        buttons &&
                        buttons.map(button => (
                            <Button onClick={() => button.onClick(selectCounselor)}>{button.text}</Button>
                        ))
                    }
                </div>
            </Modal>
        </div>
    )
}
