import React, {useState, useEffect} from "react";
import { ConsultingSignUpPresenter } from "./ConsultingSignUpPresenter";
import API from "../../../api/API";
import { useNavigate } from "react-router-dom";

const ConsultingSignUpContainer = () => {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    // const [pw2, setPw2] = useState('')   // pw2 -> pwCheck 으로 변경
    const [pwCheck, setPwCheck] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');

    const [isEmail, setIsEmail] = useState(0);
    const [isId, setIsId] = useState(0);
    const [isPw, setIsPw] = useState(0);
    const [isName, setIsName] = useState(0);
    const [isNickname, setIsNickname] = useState(0);
    const [isTel, setIsTel] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate()



    /**
     *  이메일 정규식
     */
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;


    /**
     * 회원가입 빈칸 확인
     */
    useEffect(() => {
      setIsActive(isId && isPw && isName && isEmail && isNickname && isTel === 1);
    }, [isId, isPw, isName, isEmail, isNickname, isTel]);


    /**
     *  id 입력 시 state 변경
     */
    const handleIdChange = (id) => {
      setId(id);
    }


    /**
     * pw 입력 시 state 변경
     */
    const handlePwChange = (pw) => {
      setPw(pw);
    }
    const handlePwCheckChange = (pw) => {
      setPwCheck(pw);
    }



    /**
     * 비밀번호 일치 확인
     */
    const handlePwCheck = () => {
      if (pw !== pwCheck) {
        setIsPw(0)
        console.log('비밀번호가 일치하지 않습니다.')
        return;
      }

      setIsPw(1)
    }


    /**
     * 본명 입력 시 state 변경
     */
    const handleNameChange = (e) => {
      setName(e.target.value);
    }
    const handleNameCheck = () => {
      setIsName(name.length !== 0);
    }


    /**
     * 예명 입력 시 state 변경
     */
    const handleNicknameChange = (nickname) => {
      setNickname(nickname)
    }

    const handleNicknameCheck = () => {
      setIsNickname(nickname.length !== 0);
    }


    // 이메일 입력 시 state 변경
    const handleEmailChange = (email) => {
      setEmail(email)
    }

    // 이메일 onBlur 시 유효성 검사
    const handleEmailCheck = () => {
      if (emailRegex.test(email) == false) {
        setIsEmail(0)
        setIsId(0);
        return;
      }
      setIsEmail(1)
    }



    // 전화번호 입력 시 state 변경
    const handleTelChange = (tel) => {
      setTel(tel)
    }



    /**
     * 전화번호 확인
     * if (tel.length !== 11) {
     * console.log('전화번호 양식에 맞게 다시 입력해 주세요.')
     * return;
     * }
     */

    /**
     *  중복 확인
     */
    const handleDoublecheck = async () => {
      const body = {
        email: email,
        phone: tel,
        name: name,
        nickname: nickname,
      }

      const {data} = await API.postCounselorDoublecheck(body);

      if (data === 4091) {
        // email 중복
        setIsId(0);
        return;
      } else if (data === 4092) {
        // phone 중복
        setIsTel(0);
        return;
      } else if (data === 4093) {
        // nickname 중복
        setIsNickname(0);
        return;
      }
      setIsId(1);
      setIsTel(1);
      setIsNickname(1);
    }


    /**
     * 회원가입 빈칸 확인
     */
    // const isActive = id && pw && nickname && tel && isCheck === true;

    const handleSignUp = async() => {
      if(!(isActive)) {
        console.log("빈값 존재")
        return 0;
      }

      const headers = {
        'Content-Type': 'application/json',
      }

      const body = {
          email: email,
          pw: pw,
          name: name,
          nickname: nickname,
          phone: tel,
      }

      const result = await API.postcounselorsignup(body);
      console.group(result)
    //   navigate('/')
    }

    // const signupinfo = API.postsignup({id, pw, nickname, tel})
    // console.log(signupinfo)

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
        <ConsultingSignUpPresenter
          isId={isId}
          isEmail={isEmail}
          isPw={isPw}
          isName={isName}
          isNickname={isNickname}
          isActive={isActive}

          onChangeId={handleIdChange}
          onChangePw={handlePwChange}
          onChangePwCheck={handlePwCheckChange}
          onChangeName={handleNameChange}
          onChangeNickname={handleNicknameChange}
          onChangeTel={handleTelChange}
          onChangeEmail={handleEmailChange}
      
          handleSignUp={handleSignUp}
          handlePwCheck={handlePwCheck}
          handleEmailCheck={handleEmailCheck}
          handleNameCheck={handleNameCheck}
          handleNicknameCheck={handleNicknameCheck}
          handleDoublecheck={handleDoublecheck}

          options = {options}
          setId={setId}
          setPw={setPw}
          setPwCheck={setPwCheck}
          setNickname={setNickname}
          setTel={setTel}/>
    )
}

export default ConsultingSignUpContainer;