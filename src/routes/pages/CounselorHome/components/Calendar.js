import React, { useState, useEffect } from 'react';
import './Calendar.css';
import 'react-spring-bottom-sheet/dist/style.css';
import { Button,Modal, Calendar } from 'antd';

const Calendar_form = (props) => {
    let date = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectDate, setselectDate] = useState();
    const [mode, setmode] = useState();

    const onDateSelect = (date) => {
        setselectDate(date.format("YYYY-MM-DD"));
    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onPanelChange = (value, mode) => {
        // 패널 바뀌는 코드
        setmode(mode);
        console.log(mode);
    }

    useEffect(() => {
        console.log(selectDate)
    },[selectDate])
    return (
        <>
        <Button type="primary" onClick={showModal}>
            <div className='design'></div>
        </Button>
        <Modal open={isModalOpen} onCancel={handleCancel}>
            <div className='calendar'>
                <div className='coin'>
                    220 코인
                </div>
                <div className='quantity'>
                    110 건
                </div>
                <div className='detail'>
                    <Calendar onSelect={onDateSelect} onPanelChange={onPanelChange}/>
                </div>
            </div>
        </Modal>
        </>
    );
};

export default Calendar_form;
