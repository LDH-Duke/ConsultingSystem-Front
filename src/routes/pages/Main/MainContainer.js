import { useEffect, useState } from 'react';
import {MainPresenter} from './MainPresenter'
import API from '../../../api/API';

const MainContainer = () => {
    const [counselors, setCounselors] = useState([]);

    useEffect(() => {
        const counselorsinfo = API.getCounselors()
        setCounselors(counselorsinfo)
    },[])

    return(
        <MainPresenter counselors = {counselors} />
    )
}

export default MainContainer;