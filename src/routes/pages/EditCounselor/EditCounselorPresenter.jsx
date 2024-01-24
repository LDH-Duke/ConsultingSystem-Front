import React from "react";
import './EditCounselor.css';
import Title from "../../../components/Title";
import { Tabs} from 'antd';

export const EditCounselorPresenter = ({
    items
}) => {
    return(
        <div className="editcounselor-container">
            <div className="editcounselor-wrap">
                <div className="title">
                    <Title title={"상담사 정보 수정"} />
                </div>
                <div className='tab-container'>
                    <Tabs items={items}>

                    </Tabs>
                </div>
            </div>
        </div>
    )
}