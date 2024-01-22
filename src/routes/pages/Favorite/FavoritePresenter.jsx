import React from 'react'
import './Favorite.css'
import Title from '../../../components/Title'
import Card from './components/Card'

export const FavoritePresenter = ({
    counselorInfo
}) => {
    
    return (
        <div className="favorite-container">
            <div className="favorite-wrap">
                <div className='title'>
                    {/* <Header /> */}
                    <Title title = {'즐겨찾기'} />
                </div>
                {
                    counselorInfo.map(info => <Card Key={info.id} info={info} />)
                }
            </div>
        </div>
    )
}   