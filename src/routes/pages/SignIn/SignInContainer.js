import React, { useState } from 'react'
import { SignInPresenter } from './SignInPresenter'
import API from '../../../api/API'
import cookie from '../../../cookie';
import { useNavigate } from 'react-router-dom';

const SignInContainer = ({
    setCookies
}) => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const navigate = useNavigate();

    const onSubmit = async () => {
        // console.log('아이디:', id)
        // console.log('비밀번호:', pw)

        const {data} = await API.postsignin({email: id, pw})

        setCookies(data);
        // cookie.setCookie('id', data.data.id, {
        //     path: '/',
        //     secure: '/',
        // }) 
        // cookie.setCookie('token', data.token, {
        //     path: '/',
        //     secure: '/',
        // })
        
        /**
         * if (signininfo.status === 200) {
         *  로그인성공
         *  navigate('/')
         * } else 오류처리
         */

        navigate('/');
    }

    return (
        <SignInPresenter setId ={setId} setPw = {setPw} onSubmit={onSubmit}/>
    )
}

export default SignInContainer;