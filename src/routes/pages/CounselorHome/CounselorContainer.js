import { useEffect } from "react";
import React, {useState} from "react";
import { CounselorPresenter } from "./CounselorPresenter";
import SubHeader from "../../../components/SubHeader";

const CounselorContainer = ({
    switchChecked,
    handleSwitchChange,
}) => {

    // 핸들러 관련부분
    const [buttonchecked, setbuttonchecked] = useState('');


    const buttonAccept = () => {
        setbuttonchecked(true)
    };

    const buttonReject = () => {
        setbuttonchecked(false)
    };

    useEffect(() => {
        console.log(buttonchecked);
    }, [buttonchecked])


    return (
        <CounselorPresenter 
        buttonchecked = {buttonchecked}
        buttonAccept = {buttonAccept}
        buttonReject = {buttonReject} />
    );
};

export default CounselorContainer