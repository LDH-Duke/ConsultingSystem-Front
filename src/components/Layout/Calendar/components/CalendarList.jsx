import React, { useState } from 'react'
import './CalendarList.css'
import { Select } from 'antd';
import { RadioBox } from './RadioBox';

export const CalendarList = ({
    clickDay
}) => {
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');

    const [endHour, setEndHour] = useState('00');
    const [endMinute, setEndMinute] = useState('00');

    const [workInfo, setWorkInfo] = useState('')
    const [workStatus, setWorkStatus] = useState('')


    const workInfoRadio = [
        {
            id: 'info',
            value: '근무',
            name: '근무',
            onChange: setWorkInfo
        },
        {
            id: 'info',
            value: '휴무',
            name: '휴무',
            onChange: setWorkInfo
        }
    ]

    const workStatusRadio = [
        {
            id: 'status',
            value: '대기',
            name: '대기',
            onChange: setWorkStatus
        },
        {
            id: 'status',
            value: '부재',
            name: '부재',
            onChange: setWorkStatus
        }
    ]


    const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
    const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));

    const hourOptions = hours.map((hourOption) => ({
        value: hourOption,
        label: hourOption,
    }));

    const minuteOptions = minutes.map((minuteOption) => ({
        value: minuteOption,
        label: minuteOption,
    }));



    console.log(hour)

    return (
        <div className='schedule'>
            <div className='schedule-nav'>
                <span>{clickDay}</span>
            </div>
            <div className='schedule-select'>
                <div className='schedule-option'>
                    <span className='option-title'>근무 정보</span>
                    <RadioBox datas={workInfoRadio} />
                </div>
                <div className='schedule-option'>
                    <span className='option-title'>근무 상태</span>
                    <RadioBox datas={workStatusRadio} />
                </div>
                <div className='schedule-option'>
                    <span className='option-title'>근무 시간</span>
                    <div className='schedule-option-box'>
                        <span>시작</span>
                        <Select
                            defaultValue={hour}
                            onChange={setHour}
                            listHeight={120}
                            options={hourOptions}
                        />

                        <Select
                            defaultValue={minute}
                            onChange={setMinute}
                            listHeight={120}
                            options={minuteOptions}
                        />
                    </div>
                    <div className='schedule-option-box'>
                        <span>종료</span>
                        <Select
                            defaultValue={endHour}
                            onChange={setEndHour}
                            listHeight={120}
                            options={hourOptions}
                        />

                        <Select
                            defaultValue={endMinute}
                            onChange={setEndMinute}
                            listHeight={120}
                            options={minuteOptions}
                        />
                    </div>
                </div>
            </div>
            {/* <div className='schedule-add'>
                    <button>add</button>
                </div> */}
        </div>
    )
}
