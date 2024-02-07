import React, { useState, useEffect } from 'react';
import './Calendar.css';
import 'react-spring-bottom-sheet/dist/style.css';
import { Button, Modal, Calendar, Badge } from 'antd';

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


    /* Calendar에 요소 추가 */
    const getListData = (value) => {
        let listData;
        switch (value.date()) {
          case 8:
            listData = [
              {
                type: 'warning',
                content: 'This is warning event.',
              },
              {
                type: 'success',
                content: 'This is usual event.',
              },
            ];
            break;
          case 10:
            listData = [
              {
                type: 'warning',
                content: 'This is warning event.',
              },
              {
                type: 'success',
                content: 'This is usual event.',
              },
              {
                type: 'error',
                content: 'This is error event.',
              },
            ];
            break;
          case 15:
            listData = [
              {
                type: 'warning',
                content: 'This is warning event',
              },
              {
                type: 'success',
                content: 'This is very long usual event......',
              },
              {
                type: 'error',
                content: 'This is error event 1.',
              },
              {
                type: 'error',
                content: 'This is error event 2.',
              },
              {
                type: 'error',
                content: 'This is error event 3.',
              },
              {
                type: 'error',
                content: 'This is error event 4.',
              },
            ];
            break;
          default:
        }
        return listData || [];
      };
      const getMonthData = (value) => {
        if (value.month() === 8) {
          return 1394;
        }
      };

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
          <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
          </div>
        ) : null;
      };
      const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
          <ul className="events">
            {listData.map((item) => (
              <li key={item.content}>
                <Badge status={item.type} text={item.content} />
              </li>
            ))}
          </ul>
        );
      };

    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
      };

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
                    <Calendar
                        onSelect={onDateSelect}
                        onPanelChange={onPanelChange}
                        cellRender={cellRender}
                    />
                </div>
            </div>
        </Modal>
        </>
    );
};

export default Calendar_form;
