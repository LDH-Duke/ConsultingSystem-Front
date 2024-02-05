import './WriteReview.css';
import { Button } from 'antd';
import Title from '../../../../components/Title';
import Category from './components/Category';

export const WriteReviewPresenter = ({
    counselor,
    navigate,
    content,
    setContent,
    writeReview
}) => {

    if (!counselor) {
        return <div>로딩중</div>
    }

    return (
        <div className="writereview-container">
            <div className="writereview-wrap">
                <div className="title">
                    <Title title={'후기 작성'} />
                </div>
                <div className="form">
                    <div className="writereview-detail">
                        <div className="img"></div>
                        <div className="info">
                            <Category category={'진로'} />
                            <span>{counselor.name}</span>
                        </div>
                    </div>
                    <div className="writereview-info">
                        <div className="writereview-title">
                            <h3>후기 내용</h3>
                        </div>
                        <textarea
                            cols={100}
                            rows={20}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                </div>
                <div className="button">
                    <Button onClick={ () => { writeReview() }}>제출하기</Button>
                    <Button onClick={ () => { navigate(-1); } }>취소</Button>
                </div>
            </div>
        </div>
    )
}