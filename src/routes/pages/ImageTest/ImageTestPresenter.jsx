import React, { useEffect } from "react";
import Formname from './components/Formname';
import { Form, Button, Input } from 'antd'

export const ImageTestPresenter = ({
    setText,
    imageSrc,
    onChangeImage
}) => {

    return (
        <div className="images-test-container">
            <Input
                type="file"
                accept="image/*"
                onChange={onChangeImage}
                multiple='multiple'
            />
            <textarea cols='100' rows='40' onChange={(e) => { setText(e.target.value) }} />
            <button>등록</button>

            {/* {
                imageSrc.map((img, idx) => {
                    return (
                        <img src={img} alt="사진" />
                    )
                })
            } */}

        </div>
    )
}