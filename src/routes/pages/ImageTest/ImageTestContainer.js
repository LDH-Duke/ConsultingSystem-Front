import { useEffect, useState, useRef } from 'react';
import { ImageTestPresenter } from './ImageTestPresenter'
import { API } from '../../../api';
import cookie from '../../../cookie';
import axios from 'axios';

const ImageTestContainer = () => {
    const [returnUrl, setReturnUrl] = useState([]);
    const [imageSrcs, setImageSrcs] = useState([]);
    const [text, setText] = useState('');


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
        previewImage(images);
        const formData = new FormData();
        formData.append('image', images);

        for (let i = 0; i < images.length; i++) {
            formData.append('image', images[i]);
        }


        const headers = {
            'Content-type': 'multipart/form-data; boundary=<calculated when request is sent>; charset=UTF-8',
        }

        // const { data } = await axios({
        //     method: 'POST',
        //     url: 'http://3.34.129.182:3333/api/v1/counselor/addtemp',
        //     mode: 'cors',
        //     // headers,
        //     data: formData
        // })
        // 이미지 여러개 저장
        const {data} = await axios.post('http://3.34.129.182:3333/api/v1/counselor/addtemp', formData, { headers })

        // console.log(data.data)
        const urls = [];
        data.data.forEach(urlData => {
            // console.log(urlData)
            const url = urlData.replace('[[','').replace(']]','');
            urls.push(url);
        });
        setReturnUrl(urls);
    }

    const onSubmit = () => {
        
    }



    return (
        <ImageTestPresenter
            setText={setText}
            imageSrcs={imageSrcs}
            onChangeImage={onChangeImage} />
    )
}

export default ImageTestContainer;