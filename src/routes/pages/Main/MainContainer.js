import { useEffect, useState } from 'react';
import { MainPresenter } from './MainPresenter'
import API from '../../../api/API';
import cookie from '../../../cookie';

const MainContainer = () => {

    // const [userId, setUserId] = useState('허관');
    const [counselorId, setCounselorId] = useState('');
    const [favorite, setFavorite] = useState(false);
    


    /**
     * 임시 데이터
     */
    const [counselors, setCounselors] = useState([
        {
            counselor_id: 1,
            name: '허관',
            category: '진로',
            price: 1000,
            rank: '브론즈',
            status: false,
            introduce: '가'
        },
        {
            counselor_id: 2,
            name: '김권후',
            category: '대선',
            price: 2000,
            rank: '실버',
            status: true,
            introduce: '나'
        },
        {
            counselor_id: 3,
            name: '김건우',
            category: '화이트',
            price: 3000,
            rank: '골드',
            status: false,
            introduce: '다'
        }
    ]);

    useEffect( () => {
        console.log(favorite);
    }, [favorite]);

    /**
     * 즐겨찾기 추가
     */
    const addFavorite = async(counselorId) => {

        setFavorite(true);

        const userId = cookie.getCookie('id');
        const data = {
            user_id: userId,
            counselor_id: counselorId
        };

        console.log(data, favorite)
        const result = await API.postFavorite(data);
    }



    // useEffect(() => {
    //     const counselorsinfo = API.getCounselors()
    //     setCounselors(counselorsinfo)
    // },[])

    return (
        <MainPresenter counselors={counselors} addFavorite={addFavorite} />
    )
}

export default MainContainer;