import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarReact.css'

export const CalendarReact = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar onChange={onChange}
                value={value}
                formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}
                calendarType='US'
            />
        </div>
    );
}
