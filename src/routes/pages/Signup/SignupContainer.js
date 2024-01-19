import React, { useState } from "react";
import { SignupPresenter } from "./SignupPresenter";

const SignupContainer = () => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [pw2, setPw2] = useState('')
    const [nickname, setNickname] = useState('')
    const [tel, setTel] = useState('')

    const onSubmit = () => {
      console.log('아이디:', id)
      console.log('비밀번호:', pw)
      console.log('비밀번호 확인:', pw2)
      console.log('닉네임:', nickname)
      console.log('전화번호:', tel)
    }

    const options = [
        {
          label: '대한민국 +82',
          value: 'korea',
          emoji: '대한민국',
          desc: '+82',
        },
        {
          label: '미국 +1',
          value: 'usa',
          emoji: '미국',
          desc: '+1'
        },
      ];

    return(
        <SignupPresenter options = {options} setId={setId} setPw={setPw} setPw2={setPw2}
        setNickname={setNickname} setTel={setTel} onSubmit={onSubmit}/>
    )
}

export default SignupContainer;