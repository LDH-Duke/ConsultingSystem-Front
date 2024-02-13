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

export const CalendarReact = () => {
    const [value, onChange] = useState(new Date());

    return (
        <CalendarContainer>
            <Calendar onChange={onChange}
                value={value}
                formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}
                calendarType='US'
            />
        </CalendarContainer>
    );
}
