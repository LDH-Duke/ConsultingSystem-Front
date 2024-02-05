import React from "react";
import { Button } from "antd";
import example from './example.png';
import './FavoriteListItem.css';

export const FavoriteListItem = ({
    favoriteList,
    
    deleteFavorite
}) => {
    return (
        <>
            {
                favoriteList &&
                favoriteList.map(favoriteInfo => (
                    <div className="favorite-list-item">
                        <img src={example} alt="상담사 이미지" />
                        <div className="favorite-list-item-infos">
                            <div className="favorte-list-item-info">
                                <span className="favorite-list-item-category">{favoriteInfo.category}</span>
                                <span className="favorite-list-item-name">{favoriteInfo.name}</span>
                            </div>
                            <Button
                                onClick={() => {deleteFavorite(favoriteInfo.counselor_id)}}
                                style={{width: '120px'}}
                            >
                                취소
                            </Button>
                        </div>
                    </div>
                ))
            }
        </>
    )    
}