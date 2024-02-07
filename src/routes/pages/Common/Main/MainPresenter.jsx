import React, { useEffect } from "react";
import Layout from '../../../../components/Layout/Layout';
import { Banner } from '../../../../components/Layout/Banner/Banner';
import { List } from '../../../../components/Layout/List/List';

export const MainPresenter = ({
    isSignIn,

    counselors,
    selectCounselor,
    moveCounselorDetail,

    favorites,
    addFavorite,
    deleteFavorite,

    isModalOpen,
    modalOpen,
    handleOk,
    handleCancel,
    modalItems,
    modalButtons,
    
    connectConsultingV1,
    connectConsultingV2,
}) => {    
    return (
        <Layout nav={1}>
            <Banner isSignIn={isSignIn}/>
            <List
                counselors={counselors}
                selectCounselor={selectCounselor}
                moveCounselorDetail={moveCounselorDetail}

                favorites={favorites}
                addFavorite={addFavorite}
                deleteFavorite={deleteFavorite}

                isModalOpen={isModalOpen}
                modalOpen={modalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
                modalItems={modalItems}
                modalButtons={modalButtons}
          
                connectConsultingV1={connectConsultingV1}
                connectConsultingV2={connectConsultingV2}
            />
        </Layout>
    )
}