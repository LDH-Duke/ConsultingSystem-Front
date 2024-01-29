import { useEffect, useState, useRef } from 'react';
import { ImageTestPresenter } from './ImageTestPresenter'
import { API } from '../../../api';
import cookie from '../../../cookie';
import axios from 'axios';

const ImageTestContainer = () => {
    const [images, setImages] = useState([]);
    const [imageSrc, setImageSrc] = useState('');

    const previewImage = (image) => {
        const reader = new FileReader();
        reader.readAsDataURL(image)
        reader.onloadend = e => {
            setImageSrc(e.target.result);
        }
    }

    const onChangeImage = async (e) => {
        // API 연결
        console.log(e.target.files[0]);
        previewImage(e.target.files[0])
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        const headers = {
            'Content-type': 'multipart/form-data; boundary=<calculated when request is sent>; charset=UTF-8',
        }

        const {data} = await axios({
            method: 'POST',
            url: 'http://3.34.129.182:3333/api/v1/counselor/addtemp',
            mode: 'cors',
            headers,
            data: formData
        })

        console.log(data.data)
        setImages(data.data)
    }

    return (
        <ImageTestPresenter
        images={images}
        imageSrc={imageSrc}
        onChangeImage={onChangeImage}/>
    )
}

export default ImageTestContainer;