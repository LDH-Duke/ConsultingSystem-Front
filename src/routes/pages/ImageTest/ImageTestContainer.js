import { useEffect, useState, useRef } from 'react';
import { ImageTestPresenter } from './ImageTestPresenter'
import { API } from '../../../api';
import cookie from '../../../cookie';
import axios from 'axios';

const ImageTestContainer = () => {
    const [returnUrl, setReturnUrl] = useState([]);
    const [imageSrc, setImageSrc] = useState([]);
    const [text, setText] = useState('');


    const previewImage = (images) => {
        console.log(images)
        const reader = new FileReader();

        reader.readAsDataURL(images)
        reader.onloadend = e => {
            setImageSrc(e.target.result);
        }


    }

    const onChangeImage = async (e) => {
        // API 연결
        console.log(e.target.files);
        // previewImage(e.target.files)
        const formData = new FormData();
        formData.append('image', e.target.files);
        const headers = {
            'Content-type': 'multipart/form-data; boundary=<calculated when request is sent>; charset=UTF-8',
        }

        const { data } = await axios({
            method: 'POST',
            url: 'http://3.34.129.182:3333/api/v1/counselor/addtemp',
            mode: 'cors',
            headers,
            data: formData
        })
        console.log(data)
        let url = ''
        for (const a in data.data) {
            url = data.data[a].replace('[[', '');
            url = url.replace(']]', '');
            setReturnUrl(url)
        }
        console.log(returnUrl)

    }

    const onSubmit = () => {

    }



    return (
        <ImageTestPresenter
            setText={setText}
            imageSrc={imageSrc}
            onChangeImage={onChangeImage} />
    )
}

export default ImageTestContainer;