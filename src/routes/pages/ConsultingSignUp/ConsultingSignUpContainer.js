import { ConsultingSignUpPresenter } from "./ConsultingSignUpPresenter";
import API from "../../../api/API";

const ConsultingSignUpContainer = () => {

    const onSubmit = () => {
        const counselorsignup = API.postcounselorsignup()
    }
    
    return(
        <ConsultingSignUpPresenter />
    )
}

export default ConsultingSignUpContainer;