import React, { useEffect } from "react";
import { Form, Input, Button, Select, Space } from "antd";
import './MyMenu.css';
import Layout from '../../../../components/Layout/Layout';
import styled from "styled-components";
import { MyMenuInfo } from "./components/MyMenuInfo";

export const MyMenuPresenter = ({
    userInfo,
    myMenuItems
}) => {
    return (
        <Layout nav={1}>
            <MyMenuInfo userInfo={userInfo} myMenuItems={myMenuItems}/>
        </Layout>
    )
}