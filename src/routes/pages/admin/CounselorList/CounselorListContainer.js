import React, { useEffect, useState } from "react";
import { CounselorListPresenter } from "./CounselorListPresenter";
import { useNavigate } from "react-router-dom";
import {API} from '../../../../api';

const CounselorListContainer = () => {
  const [counselors, setCounselors] = useState([
    {
      id: 'test1',
      nickname: 'test1',
      phone: '01011111111',
    },
    {
      id: 'test2',
      nickname: 'test2',
      phone: '01011112222',
    },
    {
      id: 'test3',
      nickname: 'test3',
      phone: '01011113333',
    },
    {
      id: 'test4',
      nickname: 'test4',
      phone: '01011114444',
    },
    {
      id: 'test5',
      nickname: 'test5',
      phone: '01011115555',
    },
  ])

  useEffect(() => {
    (async () => {
      const counselorResult = await API.getCounselors();
  
      console.log(counselorResult);
      
      // TODO: API연결 필요
      // setCounselors(counselorResult);
    })();
  }, []);

  const _removeCounselor = (id) => {
    setCounselors(counselors.filter(counselor => counselor.id !== id));
  }

  const acceptCounselor = (id) => {
   alert('상담사 신청을 수락하였습니다.');
   _removeCounselor(id);
  }
  
  const rejectCounselor = (id) => {
    alert('상담사 신청을 거절하였습니다.');
    _removeCounselor(id);
  }

    return(
        <CounselorListPresenter
         counselors={counselors}
         acceptCounselor={acceptCounselor}
         rejectCounselor={rejectCounselor}
      />
    )
}

export default CounselorListContainer;