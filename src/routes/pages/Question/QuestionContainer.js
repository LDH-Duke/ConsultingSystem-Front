import { QuestionPresenter } from "./QuestionPresenter";
import { useState } from "react";

const QuestionContainer = () => {
    const [name] = useState('클로이');

    return(
        <QuestionPresenter name = {name} />
    )
}

export default QuestionContainer;