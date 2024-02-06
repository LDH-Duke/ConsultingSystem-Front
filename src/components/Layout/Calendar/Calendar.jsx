import React from 'react'
import { CalendarReact } from './components/CalendarReact'
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
    return (
        <div className='calendar-container'>
            <CalendarReact />
            <div className='schedule'>
                <div className='schedule-nav'>
                    <span>2월 17일</span>
                </div>
                <div className='schedule-todo'>
                    <ul className='reservation-list'>
                        {
                            reservData.map((reservation, idx) => {
                                return (
                                    <li className={`reserv-item ${idx}`} key={`reserv-item ${idx}`}>
                                        <span>{reservation.hour}</span>
                                        <span>{reservation.name}</span>
                                        <button>mod</button>
                                        <button>del</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='schedule-add'>
                    <button>add</button>
                </div>
            </div>
        </div>
    )
}
