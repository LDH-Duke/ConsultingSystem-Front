import { useEffect, useState, useRef } from 'react';
import { ImageTestPresenter } from './ImageTestPresenter'
import { API } from '../../../api';
import cookie from '../../../cookie';
import axios from 'axios';

const ImageTestContainer = () => {
    const [returnUrl, setReturnUrl] = useState([]);
    const [imageSrcs, setImageSrcs] = useState([]);
    const [files, setFiles] = useState('');
    const [text, setText] = useState('');

    //utils 이동 예정
    const getCookie = (name, options = null) => {
        const value = window.document.cookie.match(
            '(^|;) ?' + name + '=([^;]*)(;|$)'
        );
        return value ? decodeURIComponent(value[2]) : null;
    };

    const previewImage = (images) => {
        console.log(images)

        let srcs = [];
        for (let i = 0; i < images.length; i++) {
            const reader = new FileReader();

            reader.readAsDataURL(images[i])
            reader.onloadend = e => {
                srcs.push(e.target.result);
            }
        }
        setImageSrcs(srcs);
    }

    const onChangeImage = async (e) => {
        // API 연결
        const images = e.target.files;
        setFiles(e.target.files)
        previewImage(images);

        const formData = new FormData();
        for (const file in e.target.files) {
            formData.append('image', e.target.files[file]);
        }

        const headers = {
            'Content-type': 'multipart/form-data; boundary=<calculated when request is sent>; charset=UTF-8',
            'Authorization': `Bearer ${encodeURIComponent(getCookie('token'))}`
        }
        // 이미지 여러개 저장
        const { data } = await axios.post('http://localhost:3333/api/v1/counselor/addtemp', formData, { headers })

        data.data.forEach(urlData => {
            const url = urlData.replace('[[', '').replace(']]', '');
            setReturnUrl(prev => [...prev, url]);
        });
    }

    const onSubmit = async () => {
        console.log('동작');
        console.log(files);

        const formData = new FormData();
        for (const file in files) {
            formData.append('image', files[file]);
        }

        for (const url in returnUrl) {
            formData.append('imageUrl', returnUrl[url]);
        }
        formData.append('content', text)


        const headers = {
            'Authorization': `Bearer ${encodeURIComponent(getCookie('token'))}`
        }
        const { data } = await axios.post('http://localhost:3333/api/v1/counselor/addprofile', formData, { headers })
        console.log(data)

    }



    return (
        <ImageTestPresenter
            setText={setText}
            imageSrcs={imageSrcs}
            onChangeImage={onChangeImage}
            onSubmit={onSubmit} />
    )
}

export default ImageTestContainer;