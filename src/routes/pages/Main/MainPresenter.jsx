import React, { useEffect } from "react";
import './Main.css';
import List from "./components/List";
import {Form, Button} from 'antd'

export const MainPresenter = ({
    counselors,
}) => {
    useEffect(() => {
        console.log(counselors)
    }, [])

    return(
        <div className="main-container">
            <div className="main-wrap">
                {/* <Header /> */}
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
                    <List name = {'상담사1'} price = {'1500'} introduce = {'인생은 속도가 아닌 방향'} counselor_id={counselors[0].id} ></List>
                    <List name = {'상담사1'} price = {'1500'} introduce = {'인생은 속도가 아닌 방향'}></List>
                    <List name = {'상담사1'} price = {'1500'} introduce = {'인생은 속도가 아닌 방향'}></List>
                </div>
            </div>
        </div>
    )
}