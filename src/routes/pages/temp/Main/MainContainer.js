import { useEffect, useState } from 'react';
import { MainPresenter } from './MainPresenter'
import { API } from '../../../api';
import cookie from '../../../cookie';

const MainContainer = () => {


    // 즐겨찾기 목록
    const [favorites, setFavorites] = useState([]);

    // 상담사 목록
    const [counselors, setCounselors] = useState([]);


    
    useEffect(() => {

        
        (async () => {

            // 상담사 전체 조회
            const counselorsData = await API.getCounselors();
            setCounselors(counselorsData.data);

            // 회원 즐겨찾기 조회
            const FavoritesData = await API.getFavorites();
            setFavorites(FavoritesData.data);

        })();
    }, [], [favorites])

    
    /**
     * 즐겨찾기 추가
     */
    const addFavorite = async (counselorId) => {

        console.log(counselorId);
        const userId = cookie.getCookie('id');
        const data = {
            user_id: userId,
            counselor_id: counselorId
        };

        const result = await API.postFavorite(data);

        // 함수형 업데이트: 이전 즐겨찾기 목록에서 상담사 ID를 추가
        setFavorites((prevFavorites) => [...prevFavorites, counselorId])
    }


    /**
     * 즐겨찾기 취소
     */
    const deleteFavorite = async (counselorId) => {

        const userId = cookie.getCookie('id');
        const data = {
            user_id: userId,
            counselor_id: counselorId
        };

        const result = await API.deleteFavorite(data);

        setFavorites((prevFavorites) => prevFavorites.filter((favoritedId) => favoritedId !== counselorId));
        
    }

    return (
        <MainPresenter
            counselors={counselors}
            addFavorite={addFavorite}
            deleteFavorite={deleteFavorite}
            favorites={favorites}
        />
    )
}

export default MainContainer;