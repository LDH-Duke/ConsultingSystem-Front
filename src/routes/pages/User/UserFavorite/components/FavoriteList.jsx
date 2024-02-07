import React from "react";
import { FavoriteListItem } from "./FavoriteListItem";
import './FavoriteList.css';

export const FavoriteList = ({
    favoriteList,

    deleteFavorite
}) => {
    
    return (
        <div className="favorite-container">
            <div className="favorite-list">
                <FavoriteListItem
                    favoriteList={favoriteList}
                    deleteFavorite={deleteFavorite}
                />
            </div>
        </div>
    )    
}