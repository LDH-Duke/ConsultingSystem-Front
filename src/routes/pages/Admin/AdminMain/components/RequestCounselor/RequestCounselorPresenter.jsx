import React from "react";
import { Button } from '../../../../../../components/Layout/Button/Button';
import './RequestCounselor.css'

export const RequestCounselorPresenter = ({
    counselors
}) => {
    return (
        <table className="counselor-table">
            <thead>
                <tr>
                    <th>순번</th>
                    <th>상담사 이미지</th>
                    <th>상담사 이름</th>
                    <th>상담사 예명</th>
                    <th>상담사 전화번호</th>
                    <th>수락버튼</th>
                    <th>거절버튼</th>
                </tr>
            </thead>
            <tbody>
                {
                    counselors &&
                    counselors.map((counselor, idx) => (
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{counselor.intro_img}</td>
                            <td>{counselor.name}</td>
                            <td>{counselor.nickname}</td>
                            <td>
                                {
                                    `${counselor.phone.substring(0, 3)} -
                                     ${counselor.phone.substring(3, 7)} -
                                     ${counselor.phone.substring(7)}`
                                }
                            </td>
                            <td>
                                <Button
                                    title={'수락하기'}
                                    onClick={() => { console.log('수락하기 클릭') }}
                                    type={'basic'}
                                />
                            </td>
                            <td>
                                <Button
                                    title={'거절하기'}
                                    onClick={() => { console.log('거젏하기 클릭') }}
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