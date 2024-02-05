import { ConsultinghistoryPresenter } from "./ConsultinghistoryPresenter";

const ConsultinghistoryContainer = () => {

    const userinfos = [
        {
            id : 1,
            name : '김자바',
            question : '진로 상담 입니다.',
            time : '2020-12-23',
            duringtime : '30'
        }
    ]

    return(
        <ConsultinghistoryPresenter userinfos = {userinfos} />
    )
}

export default ConsultinghistoryContainer;