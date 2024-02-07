import React, { useEffect } from "react";
import './UserList.css';

export const UserListPresenter = ({
    users,
}) => {
    return(
        <div className="admin-user-list-container">
            {
                users.map(user => (
                    <div className="admin-user-list-element">
                        <div className="admin-user-infos">
                            <span className="admin-user-id">
                                고객 아이디: {user.id}
                            </span>
                            <span className="admin-user-name">
                                고객 예명: {user.name}
                            </span>
                            <span className="admin-user-total-coin">
                                보유 코인: {user.total_coin}
                            </span>
                            <span className="admin-user-tel">
                                고객 전화번호: {user.tel}
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}