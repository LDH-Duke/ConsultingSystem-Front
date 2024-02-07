import React, { useEffect } from "react";
import Layout from '../../../../components/Layout/Layout';
import { Banner } from '../../../../components/Layout/Banner/Banner';
import { List } from '../../../../components/Layout/List/List';

export const MainPresenter = ({
    isSignIn,

    selectCounselor,
    counselors,
    addFavorite,

    isModalOpen,
    modalOpen,
    handleOk,
    handleCancel,
    
    connectConsultingV1,
    connectConsultingV2,
}) => {    
    return (
        <Layout nav={1}>
            <Banner isSignIn={isSignIn}/>
            <List
                selectCounselor={selectCounselor}
                counselors={counselors}
                addFavorite={addFavorite}

                isModalOpen={isModalOpen}
                modalOpen={modalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
          
                connectConsultingV1={connectConsultingV1}
                connectConsultingV2={connectConsultingV2}
            />
        </Layout>
    )
}