import React from "react";
import "./style/Card.css";
import { Form, Button } from 'antd';

const Card = ({ info }) => {{
}

    /* RENDER */
    return (
        <div className="card-container">
            <div className="card-wrap">
                <div className="card-content">
                    <div className="card-imgbox">
                    </div>
                    <div className="profile-box">
                        <div className="profile-detail">
                            <div className="profile-category">{info.category}</div>
                            <div className="profile-name">{info.name}</div>
                        </div>
                        <div className="button-box">
                            <Form.Item>
                                <Button>삭제하기</Button>
                            </Form.Item>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card