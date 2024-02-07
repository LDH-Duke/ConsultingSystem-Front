import React from "react";
import "./WriteReview.css";

const WriteReview = ({
    isUpdate,
    writeReview,
    setContent,
    content,
    setScore
}) => {
    return (
        <div className="write-review-container">
            <div className="write-review-box">
                <div className="write-review-title">
                    {
                        isUpdate ?
                        <h1>후기 수정</h1>
                        :
                        <h1>후기 내용</h1>
                    }
                </div>
                <div className="write-review-text">
                    <textarea
                        type="text"
                        placeholder="후기 내용을 입력해주세요"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="write-review-button">
                    {
                        isUpdate ?
                        <>
                        <button>수정하기</button>
                        <button>삭제하기</button>
                        </>
                        :
                        <button onClick={ () => { writeReview() }}>제출하기</button>
                    }
                    
                </div>
                <div className="write-review-button">
                    <button>취소</button>
                </div>
            </div>
        </div>
    )
}

export default WriteReview;