import React, { useEffect, useState } from "react";
import { AskAdminPresenter } from "./AskAdminPresenter";
import API from "../../../../api/API";
import cookie from "../../../../cookie";
import { useNavigate, useParams } from "react-router-dom";

const AskAdminContainer = () => {
    const { params } = useParams();

    const [error, setError] = useState({
        isError: false,
        errorMsg: '',
    });
    const [content, setContent] = useState();
    const [asks, setAsks] = useState([]);
    const [isClick, setIsClick] = useState(false);

    useEffect(() => {
        (async () => {
            const id = cookie.getCookie('id');
            if (id === null) {
                // 로그인 필요
                setError({
                    isError: true,
                    errorMsg: '로그인이 필요합니다',
                });
                return;
            }

            const type = cookie.getCookie('userType');

            const getAdminHistory =
                params === "counselor" ?
                    await API.getAskForCounselor(id) :
                    await API.getAskForUser(id);
            if (getAdminHistory.status === 404) {
                // 문의 조회 실패
                setError({
                    isError: true,
                    errorMsg: '문의 조회에 실패하였습니다.',
                });
                return;
            }

            if (getAdminHistory.status === 500) {
                // 문의 조회 실패
                setError({
                    isError: true,
                    errorMsg: '문의 조회 중 에러가 발생하였습니다.',
                });
                return;
            }

            setAsks(getAdminHistory.data);
        })();
    }, [isClick])

    const onSubmit = async () => {
        const body = {
            content
        }

        const askadmininfo = await API.postAskAdmin(body);
        if (askadmininfo.status === 409) {
            // 문의 등록 실패
            setError({
                isError: true,
                errorMsg: '문의 등록에 실패하였습니다.',
            });
            return;
        }

        if (askadmininfo.status === 500) {
            // 에러 발생
            setError({
                isError: true,
                errorMsg: '문의 등록 중 에러가 발생하였습니다.',
            });
            return;
        }

        setIsClick(!isClick)
    }

    const onDelete = async (ask_id) => {
        const deleteAskInfo = await API.deleteAsk(ask_id);
        if (deleteAskInfo.status === 404) {
            // 문의 삭제 실패
            setError({
                isError: true,
                errorMsg: '문의 삭제에 실패하였습니다.'
            });
            return;
        }

        if (deleteAskInfo.status === 500) {
            // 에러 발생
            setError({
                isError: true,
                errorMsg: '문의 삭제 중 에러가 발생하였습니다.'
            });
            return;
        }

        setIsClick(!isClick);
    }

    /**
     * 에러 처리 함수
     */
    const checkError = () => {
        setError({
            isError: false,
            errorMsg: '',
        });
    }

    return (
        <AskAdminPresenter
            onSubmit={onSubmit}
            onDelete={onDelete}
            setContent={setContent}
            asks={asks}

            error={error}
            checkError={checkError}
        />
    )
}

export default AskAdminContainer;