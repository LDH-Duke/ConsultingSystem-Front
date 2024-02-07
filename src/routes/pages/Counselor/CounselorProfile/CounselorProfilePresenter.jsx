import React from "react";
import Layout from "../../../../components/Layout/Layout";
import "./CounselorProfile.css";
import { MyInfo } from "./components/MyInfo";
import { PwInfo } from "./components/PwInfo";
import { MyIntro } from "./components/MyIntro";

export const CounselorProfilePresenter = ({
    counselor,
    setCounselor,
    onSubmit
}) => {
    return(
        <Layout nav={0}>
            <div className="counselorprofile-container">
                <div className="counselorprofile-wrap">
                    <MyInfo counselor = {counselor} setCounselor = {setCounselor} onSubmit = {onSubmit}/>
                </div>
                <div className="counselorprofile-wrap">
                    <PwInfo setCounselor = {setCounselor} onSubmit = {onSubmit}/>
                </div>
                <div className="counselorprofile-wrap">
                    <MyIntro setCounselor = {setCounselor} counselor = {counselor} onSubmit = {onSubmit}/>
                </div>
            </div>
        </Layout>
    )
}