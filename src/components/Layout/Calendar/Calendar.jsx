import React, { useState } from 'react'
import { CalendarReact } from './components/CalendarReact'
import { CalendarList } from './components/CalendarList'
import { Select } from 'antd'
import './Calendar.css'

const reservData = [
    {
        hour: 9,
        name: '이동희'
    },
    {
        hour: 9,
        name: '이동희'
    },
    {
        hour: 9,
        name: '이동희'
    },
    {
        hour: 9,
        name: '이동희'
    }
]

export const Calendar = () => {
    const [clickDay, setclickDay] = useState(new Date().toLocaleDateString('ko-KR'));


    return (
        <div className='calendar-container'>
            <CalendarReact setclickDay={setclickDay} />
            <CalendarList clickDay={clickDay} />
        </div >
    )
}
