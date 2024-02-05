import React, { useEffect, useState } from "react";
import { DetailIntroducePresenter } from "./DetailIntroducePresenter";
import { API } from "../../../../api";
import { useParams } from "react-router-dom";

const DetailIntroduceContainer = () => {

    const { counselor_id } = useParams();
    const [introduce, setIntroduce] = useState('');

    useEffect( () => {
        (async () => {
            
            const getIntroduce = await API.getCounselor(counselor_id);
            setIntroduce(getIntroduce.data.introduce);

        })();
    }, [])

    return (
        <DetailIntroducePresenter
            introduce={introduce}
        />
    )
}

export default DetailIntroduceContainer;