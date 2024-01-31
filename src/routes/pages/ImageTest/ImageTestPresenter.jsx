import React, { useEffect } from "react";
import Formname from './components/Formname';
import { Form, Button, Input } from 'antd';

export const ImageTestPresenter = ({
    setText,
    imageSrcs,
    onChangeImage,
    onSubmit
}) => {

    return (
        <div className="images-test-container">
            <Input
                type="file"
                accept="image/*"
                onChange={onChangeImage}
                multiple
            />
            <div>
                <textarea cols='100' rows='40' onChange={(e) => { setText(e.target.value) }} />
                <button onClick={onSubmit}>등록</button>
            </div>

            {
                imageSrcs.map((img,) => {
                    return (
                        <img src={img} alt="사진" />
                    )
                })
            }

        </div>
    )
}