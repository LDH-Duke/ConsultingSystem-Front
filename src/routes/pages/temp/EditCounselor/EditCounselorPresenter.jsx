import React from "react";
import './EditCounselor.css';
import Title from "../../../components/Title";
import { Tabs } from 'antd';
import Info from "./components/Info";

export const EditCounselorPresenter = ({
    isinfo,
    changeStatus,
    setNotice,
    onSubmit
}) => {
    return(
        <div className="editcounselor-container">
            <div className="editcounselor-wrap">
                <div className="title">
                    <Title title={"상담사 프로필 등록"} />
                </div>
                {isinfo ?
                    (
                        <div className='self-info'>
                            <Info
                                title = {"개인 공지"}
                                introduce = {"개인 공지"}
                                setNotice={setNotice}
                                onSubmit={onSubmit}
                            />
                            <button onClick={() => {changeStatus(false)}}>본인 소개 페이지 이동</button>
                        </div>
                    ) : (
                        <div className="self-introduce">
                            <Info
                                title = {"본인 소개"}
                                introduce = {"본인 소개"}
                            />
                            <button onClick={() => changeStatus(true)}>개인 공지 페이지 이동</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}