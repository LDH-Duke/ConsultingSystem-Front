import React, { useEffect, useState } from "react";
import { MyPagePresenter } from "./MyPagePresenter";
import API from "../../../api/API";
import cookie from "../../../cookie";
import { useNavigate } from "react-router";

const MyPageContainer = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [pw, setPw] = useState('');
    const [user, setUser] = useState('');
    const [dummy, setDummy] = useState({
        id : '12345',
        email : 'qwer123@naver.com',
        name : '준오얌대머리깍아라',
        phone : '010-2342-3435',
        total_coin : 2000,
        createdAt : '2024-01-25',
    })

    const navigate = useNavigate();

    const check = () => {
        if(pw === '111') {
            setIsAuth(true)
        } else {
            setIsAuth(false)
    }}

    const Changename = (e) => {
        setUser({...user, name: e.target.value, })
    }

    const Changeemail = (e) => {
        setUser({...user, email: e.target.value, })
    }

    const Changephone = (e) => {
        setUser({...user, phone: e.target.value, })
    }

    useEffect(() => {
        const id = cookie.getCookie('id');

        (async() => {
        const {data} = await API.getuser(id);
        setUser(data)})();
    }, [])

    const onSubmit = async() => {
        const id = cookie.getCookie('id')

        const updateuserinfo = await API.putProfile(id, user)

        navigate('/mypage')
        alert('수정이 완료되었습니다.')
    }

    return(
        <MyPagePresenter isAuth = {isAuth} setPw = {setPw} check = {check} user = {user} dummy = {dummy}
        onSubmit = {onSubmit} Changename = {Changename} Changeemail = {Changeemail} Changephone = {Changephone}/>
    )
}

export default MyPageContainer;