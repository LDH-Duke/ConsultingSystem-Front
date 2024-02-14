import React from "react";
import { Button } from '../../../../../../components/Layout/Button/Button';
import './ManageUser.css'

export const ManageUserPresenter = ({
    users
}) => {
    return (
        <table className="user-table">
            <thead>
                <tr>
                    <th>순번</th>
                    <th>이메일</th>
                    <th>닉네임</th>
                    <th>전화번호</th>
                    <th>잔여코인</th>
                    <th>가입일</th>
                    <th>탈퇴버튼</th>
                </tr>
            </thead>
            <tbody>
                {
                    users &&
                    users.map((user, idx) => (
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>
                                {
                                    // 전화번호 변환
                                    `${user.phone.substring(0, 3)} -
                                     ${user.phone.substring(3, 7)} -
                                     ${user.phone.substring(7)}`
                                }
                            </td>
                            <td>{user.total_coin}</td>
                            <td>
                                {
                                    // 가입일 변환
                                    user
                                        .createdAt
                                        .replace('T', '\n')
                                        .replace('Z', '')
                                }
                            </td>
                            <td>
                                <Button
                                    title={'탈퇴'}
                                    onClick={() => { console.log('탈퇴 클릭') }}
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