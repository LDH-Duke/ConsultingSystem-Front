import React, { useState } from 'react'
import { HomeIcon, SearchIcon, UserIcon, LikeIcon } from '../../../assets/navImg'
import { Link } from 'react-router-dom'
import './BottomNav.css'

export const BottomNav = () => {
    const [selectedTab, setSelectedTab] = useState('')

    const navIcons = [
        {
            icon: HomeIcon,
            url: '/'
        },
        {
            icon: SearchIcon,
            url: '/search'
        },
        {
            icon: UserIcon,
            url: '/user/mymenu'
        },
        {
            icon: LikeIcon,
            url: '/user/favorite'
        }
    ]
    return (
        <div className='bottom-nav-container'>
            <div className='bottom-nav-wrap'>
                {
                    navIcons.map((icon, idx) => {
                        const IconComponent = icon.icon
                        return (
                            <Link
                                className={`bottom-nav-tap ${idx} ${selectedTab === idx ? 'active' : ''}`}
                                key={`bottom-nav-tap ${idx}`}
                                to={icon.url}
                                onClick={() => { setSelectedTab(idx); console.log(idx) }}
                            >
                                <IconComponent className={selectedTab === idx ? 'active-icon' : ''} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
