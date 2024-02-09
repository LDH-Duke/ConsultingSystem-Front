import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHouse, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import './TopNav.css'

export const TopNav = ({
    title,
    isMain
}) => {
    const navigate = useNavigate();

    return (
        <div className="top-nav-container">
            <div className="top-nav-wrap">
                {
                    isMain ?
                        <>
                            <div className="top-nav-item">
                                MDMD
                            </div>
                            <div className="top-nav-item">
                                <Link to={'/search'}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </Link>
                                <div>
                                    <FontAwesomeIcon icon={faBars} />
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <FontAwesomeIcon
                                className='top-nav-item'
                                icon={faChevronLeft}
                                onClick={() => { navigate(-1); }}
                            />
                            <div className="top-nav-item">
                                {title}
                            </div>
                            <FontAwesomeIcon
                                className='top-nav-item'
                                icon={faHouse}
                                onClick={() => { navigate('/'); }}
                            />
                        </>
                }
            </div>
        </div>
    )
}
