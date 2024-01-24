import React from 'react'
import './Favorite.css'
import Title from '../../../components/Title'
import FavoriteCard from './components/FavoriteCard'

export const FavoritePresenter = ({
    counselors,
    deleteFavorite
}) => {
    
    return (
        <div className="favorite-container">
            <div className="favorite-wrap">
                <div className='title'>
                    <Title title = {'즐겨찾기'} />
                </div>
                {
                    counselors.map(counselors => <FavoriteCard key={counselors.id} props={counselors} deleteFavorite={deleteFavorite} />)
                }
            </div>
        </div>
    )
}   