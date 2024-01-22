import { useEffect, useState } from 'react';
import {MainPresenter} from './MainPresenter'
import API from '../../../api/API';

const MainContainer = () => {

    const counselors = [
        {
            id : 1,
            name : '알레시',
            category : '진로',
            rank : '브론즈'
        }
    ]

    // const [counselors, setCounselors] = useState([]);

    // useEffect(() => {
    //     const counselorsinfo = API.getCounselors()
    //     setCounselors(counselorsinfo)
    // },[])

    return(
        <MainPresenter counselors = {counselors} />
    )
}

export default MainContainer;