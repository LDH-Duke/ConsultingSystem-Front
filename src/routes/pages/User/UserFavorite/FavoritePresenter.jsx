import React, { useEffect } from "react";
import { Form, Input, Button, Select, Space } from "antd";
import './Favorite.css';
import Layout from '../../../../components/Layout/Layout';
import styled from "styled-components";
import { FavoriteList } from './components/FavoriteList';

export const FavoritePresenter = ({
    favoriteList,

    deleteFavorite
}) => {
    return (
        <Layout nav={1} title={'좋아요'}>
            <FavoriteList
                favoriteList={favoriteList}
                
                deleteFavorite={deleteFavorite}
            />
        </Layout>
    )
}