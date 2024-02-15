import React from "react";
import { FavoriteListItem } from "./FavoriteListItem";
import { Button } from "antd";
import example from './example.png';
import './FavoriteList.css';

export const FavoriteList = ({
    favoriteList,

    deleteFavorite
}) => {

    return (
        <div className="favorite-container">
            <ul className="favorite-list">
                {
                    favoriteList &&
                    favoriteList.map((favoriteInfo) => (
                        <li className="favorite-list-item">
                            <img src={example} alt="상담사 이미지" />
                            <div className="favorite-list-item-infos">
                                <div className="favorte-list-item-info">
                                    <span className="favorite-list-item-name">{favoriteInfo['counselor.nickname']}</span>
                                </div>
                                <Button
                                    onClick={() => { deleteFavorite(favoriteInfo.counselor_id) }}
                                >
                                    취소
                                </Button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}