import React, { useState } from 'react'
import { SignInPresenter } from './SignInPresenter'
import API from '../../../api/API'

const SignInContainer = () => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const onSubmit = () => {
        console.log('아이디:', id)
        console.log('비밀번호:', pw)

        const signininfo = API.postsignin({id, pw})

        /**
         * if (signininfo.status === 200) {
         *  로그인성공
         *  navigate('/')
         * } else 오류처리
         */
    }

    return (
        <SignInPresenter setId ={setId} setPw = {setPw} onSubmit={onSubmit}/>
    )
}

export default SignInContainer;