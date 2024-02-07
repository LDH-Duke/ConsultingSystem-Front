import React, { useEffect } from "react";
import './CounselorDetail.css';
import Layout from '../../../../components/Layout/Layout';
import { CounselorInfo } from './components/CounselorInfo';
import { CounselorIntro } from './components/CounselorIntro';
import styled from "styled-components";

const CounselorDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

export const CounselorDetailPresenter = ({
    counselor,
    counselor_id,
    reviews,
    goBack
}) => {
    return (
        <Layout nav={1}>
            <CounselorDetailContainer>
                {
                    counselor ?
                    <>
                        <CounselorInfo counselor={counselor}/>
                        <CounselorIntro
                            counselor={counselor}
                            counselor_id={counselor_id}
                            reviews={reviews}
                        />
                    </> :
                    <div className="non-counselor">
                        해당 상담사가 존재하지 않습니다.
                        <button onClick={goBack}>돌아가기</button>
                    </div>
                }
            </CounselorDetailContainer>
        </Layout>
    )
}