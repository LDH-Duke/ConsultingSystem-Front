import React, { useState } from "react";
import { SignupPresenter } from "./SignupPresenter";
import API from "../../../api/API";
import { useNavigate } from "react-router-dom";

const SignupContainer = () => {
    const navigate = useNavigate()
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

      const signupinfo = API.postsignup({id, pw, nickname, tel})
      /**
       * {
       *  status: 200,
       *  message: '회원가입에 성공하였습니다.'
       * }
       * 
       * {
       *  status: 400,
       *  message: '동일한 이메일이 존재합니다.'
       * }
      */

      // if (signupinfo.status === 200) {
      //   // 회원가입 성공
      //   // navigate('/signin')
      // } else if (signupinfo.status === 400) {
      //   // 회원가입 실패
      //   // 알림 창 띄움
      // }
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