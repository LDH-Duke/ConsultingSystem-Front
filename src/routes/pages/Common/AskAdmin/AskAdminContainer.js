import React from "react";
import { AskAdminPresenter } from "./AskAdminPresenter";

const AskAdminContainer = () => {

    const askData= [
        {
            content : '문의 내용입니다.',
            createdAt : '2023-08-16'
        },
        {
            content : '문의 내용입니다.',
            createdAt : '2023-08-16'
        },
        {
            content : '문의 내용입니다.',
            createdAt : '2023-08-16'
        },
        {
            content : '문의 내용입니다.',
            createdAt : '2023-08-16'
        },
    ]

    return(
        <AskAdminPresenter askData={askData}/>
    )
}

export default AskAdminContainer;