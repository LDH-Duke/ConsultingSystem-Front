import React, { useEffect, useState } from "react";
import { MainPresenter } from "./MainPresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";

const MainContainer = ({
  setCookies
}) => {
  const [counselors, setCounselors] = useState([]);

  useEffect(() => {
    (
      async() => {
        const result = await API.getCounselorProducts();

        if (result.status === 409) {
          // 상담사 정보 가져오기 실패
          return;
        }

        setCounselors(result.data);
      }
    )();
  }, []);

  return (
    <MainPresenter 
      counselors={counselors}
    />
  )
}

export default MainContainer;