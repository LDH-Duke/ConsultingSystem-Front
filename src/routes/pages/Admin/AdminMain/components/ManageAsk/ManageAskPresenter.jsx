import React from "react";
import { Button } from '../../../../../../components/Layout/Button/Button';
import './ManageAsk.css'

export const ManageAskPresenter = ({
    asks
}) => {
    return (
        <table className="ask-table">
            <thead>
                <tr>
                    <th>순번</th>
                    <th>문의 번호</th>
                    <th>종류</th>
                    <th>문의 내용</th>
                    <th>날짜</th>
                    <th>답변하기</th>
                </tr>
            </thead>
            <tbody>
                {
                    asks &&
                    asks.map((ask, idx) => (
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{ask.id}</td>
                            <td>{ask.category}</td>
                            <td>{ask.content}</td>
                            <td>
                                {
                                    ask
                                        .createdAt
                                        .replace('T', '\n')
                                        .replace('Z', '')
                                }
                            </td>
                            <td>
                                <Button
                                    title={'답변하기'}
                                    onClick={() => { console.log('답변하기 클릭') }}
                                    type={'basic'}
                                />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}