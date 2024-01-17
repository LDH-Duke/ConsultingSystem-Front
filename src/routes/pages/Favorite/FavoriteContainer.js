import React, { useState } from 'react'
import { FavoritePresenter } from './FavoritePresenter'

const FavoriteContainer = () => {

  const counselorInfo = [
    {
      id: 1,
      name: '허관',
      category: '진로',
      rank: '브론즈'
    },
    {
      id: 2,
      name: '김권후',
      category: '대선',
      rank: '브론즈'
    },
    {
      id: 3,
      name: '김건우',
      category: '화이트',
      rank: '브론즈'
    }
  ]

  return (
    <FavoritePresenter counselorInfo={counselorInfo} />
  )
}

export default FavoriteContainer