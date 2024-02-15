import React from "react";
import { ConsultingBox } from "./ConsultingBox";

export const ConsultingHistoryList = ({
    QuestionInfo,
    items,
    Panel,
    Collapse
}) => {
    return (
        <>
            <Collapse>
                {items.map((item) => (
                    <Panel header={<ConsultingBox QuestionInfo={QuestionInfo} />}>
                        {item.contents}
                    </Panel>
                ))}
            </Collapse>
        </>
    )
}