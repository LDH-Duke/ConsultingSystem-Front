import React from "react";
import { Tabs } from "antd";
import { Ask } from "./Ask";
import './AskTab.css'

export const AskTab = ({
    setContent,

    onSubmit
}) => {
    const items = [
        /**
         * 문의하기
         */
        {
            key: '1',
            label: '문의하기',
            children:
                <div>
                    <Ask
                    setContent={setContent}
            
                    onSubmit={onSubmit}
                    />
                </div>
        },

        {
            key: '2',
            label: '문의내역',
            children:
                <div>
                </div>
        }
    ];

    return (
        <div className="asktab-container">
            <Tabs items={items} />
        </div>
    )
}