import React from 'react'
import './Favorite.css'
import Title from '../../../components/Title'
import FavoriteCard from './components/FavoriteCard'

export const FavoritePresenter = ({
    counselors,
    addFavorite,
    deleteFavorite,
    favorite
}) => {
    
    return (
        <div className="favorite-container">
            <div className="favorite-wrap">
                <div className='title'>
                    <Title title = {'즐겨찾기'} />
                </div>
                {
                    counselors.map(counselors =>
                        <FavoriteCard
                            key={counselors.id}
                            props={counselors}
                            addFavorite={addFavorite}
                            deleteFavorite={deleteFavorite}
                            favorite={favorite}
                        />)
                }
            </div>
        </div>
    )
}