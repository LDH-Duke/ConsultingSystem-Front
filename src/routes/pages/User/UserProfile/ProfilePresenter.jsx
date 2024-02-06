import React, { useEffect } from "react";
import { Form, Input, Button, Select, Space } from "antd";
import './Profile.css';
import Layout from '../../../../components/Layout/Layout';
import styled from "styled-components";
import { ProfileBox } from "./components/ProfileBox";

export const ProfilePresenter = ({
    userInfo,
    setUserInfo,
    
    onModify,
}) => {
    return (
        <Layout nav={1}>
            <ProfileBox
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                
                onModify={onModify}
            />
        </Layout>
    )
}