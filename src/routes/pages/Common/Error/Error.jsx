import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../../components/Layout/Layout";
import './Error.css';

const Error = () => {
    return (
        <Layout>
            <div className="error">
                존재하지 않는 페이지입니다
                <div className="go-main">
                    <Link to='/'>메인으로 이동</Link>
                </div>
            </div>
        </Layout>
    )
}

export default Error;