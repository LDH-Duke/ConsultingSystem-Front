import React from 'react'
import { CalendarReact } from './components/CalendarReact'
import './Calendar.css'

export const Calendar = () => {
    return (
        <div className='calendar-container'>
            <CalendarReact />
            <div className='schedule'>
                <div className='schedule-nav'>
                    <span>2월 17일</span>
                </div>
                <div className='schedule-todo'>
                    <ul>
                        <li>
                            <span>
                                9시 이동희, 허관
                            </span>
                            <button>mod</button>
                            <button>del</button>
                        </li>
                        <li>
                            <span>
                                9시 이동희, 허관
                            </span>
                            <button>mod</button>
                            <button>del</button>
                        </li>
                        <li>
                            <span>
                                9시 이동희, 허관
                            </span>
                            <button>mod</button>
                            <button>del</button>
                        </li>
                    </ul>
                </div>
                <div className='schedule-add'>
                    <button>add</button>
                </div>
            </div>
        </div>
    )
}
