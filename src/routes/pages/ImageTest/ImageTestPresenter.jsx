import React, { useEffect } from "react";
import Formname from './components/Formname';
import {Form, Button, Input} from 'antd'

export const ImageTestPresenter = ({
    images,
    imageSrc,
    onChangeImage
}) => {

    return(
        <div className="images-test-container">
            <Input
            type="file"
            accept="image/*"
            onChange={onChangeImage}
            multiple='multiple'
            />
            <img src={imageSrc} alt="사진" />
        </div>
    )
}