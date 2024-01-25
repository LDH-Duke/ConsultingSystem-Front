import React, { useEffect } from "react";
import './Main.css';
import List from "./components/List";
import {Form, Button} from 'antd'

export const MainPresenter = ({
    counselors,
    addFavorite,
    deleteFavorite,
    favorite
}) => {

    return(
        <div className="main-container">
            <div className="main-wrap">
                <div className="main-select">
                    <div className="main-category">
                        <Form.Item>
                            <Button>전체</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button>종류1</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button>종류2</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button>종류3</Button>
                        </Form.Item>
                    </div>
                </div>
                <div className="list">
                    {
                        counselors.map(counselors => <List key={counselors.counselor_id} props={counselors} addFavorite={addFavorite} deleteFavorite={deleteFavorite} favorite={favorite}/>)
                    }
                </div>
            </div>
        </div>
    )
}