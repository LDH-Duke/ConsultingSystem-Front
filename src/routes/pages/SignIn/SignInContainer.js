import React, { useState } from 'react'
import { SignInPresenter } from './SignInPresenter'

const SignInContainer = () => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const onSubmit = () => {
        console.log('아이디:', id)
        console.log('비밀번호:', pw)
    }

    return (
        <SignInPresenter setId ={setId} setPw = {setPw} onSubmit={onSubmit}/>
    )
}

export default SignInContainer;