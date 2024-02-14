import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarReact.css'
import styled from 'styled-components';

const CalendarContainer = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
`;

export const CalendarReact = ({
    setclickDay
}) => {
    const [value, onChange] = useState(new Date());



    const onClickDay = (day) => {
        const date = new Date(day);
        const formattedDate = date.toLocaleDateString('ko-KR');
        setclickDay(formattedDate)
    }

    return (
        <div>
            <Calendar onChange={onChange}
                value={value}
                onClickDay={e => onClickDay(e)}
                formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}
                calendarType='US'
            />
        </div>
    );
}
