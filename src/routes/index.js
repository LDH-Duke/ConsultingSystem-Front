import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ImageTest, Consulting_v2, Consulting_v1, SiteMap, EditCounselor, Product, WriteReview, AskAdmin, Exchange, CounselorHome, CounselorDetail, Favorite, EditProfile, Search, Donation, SignIn, Signup, Main, Coin, PriceDetail, Question, ConsultingSignUp, Review, Error, Consultinghistory, MyPage, AdminMain, ReviewUpdate } from './pages';
import Header from '../components/Header'
import cookie from '../cookie';

const Router = () => {
  const navigate = useNavigate();

  const [hasCookies, setHasCookies] = useState(false);

  const setCookies = (data) => {
    cookie.setCookie('id', data.data.id, {
      path: '/',
      secure: '/',
    })

    cookie.setCookie('token', data.token, {
      path: '/',
      secure: '/',
    })

    setHasCookies(true);
  }

  const removeCookies = () => {
    cookie.remove('id', { path: '/' }, 1000);
    cookie.remove('token', { path: '/' }, 1000);

    setHasCookies(false);
  }

  return (
    <div>
      <Header hasCookies={hasCookies} removeCookies={removeCookies} />
      <Routes>
        <Route exact path="/counselor/:counselor_id" element={<CounselorDetail />} />
        <Route exact path="/favorite/:user_id" element={<Favorite navigate={navigate} />} />
        {/* <Route exact path="/editprofile" element={<EditProfile />} /> */}
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/donation/:counselor_id" element={<Donation />} />
        <Route exact path='/' element={<Main />} />
        <Route exact path='/sign' element={<SignIn setCookies={setCookies} />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/coin' element={<Coin />} />
        <Route exact path='/pricedetail' element={<PriceDetail />} />
        <Route exact path='/question/:counselor_id' element={<Question navigate={navigate} />} />
        <Route exact path='/consultingsignup' element={<ConsultingSignUp />} />
        <Route exact path='/review' element={<Review />} />
        <Route exact path='/*' element={<Error />} />
        <Route exact path='/counselor/home/:counselor_id' element={<CounselorHome />} />
        <Route exact path='/exchange' element={<Exchange />} />
        <Route exact path='/askadmin' element={<AskAdmin />} />
        <Route exact path='/writereview/:counselor_id' element={<WriteReview />} />
        <Route exact path='/consultinghistory' element={<Consultinghistory />} />
        <Route exact path='/product/:counselor_id' element={<Product />} />
        <Route exact path='/editcounselor/:counselor_id' element={<EditCounselor />} />
        <Route exact path='/mypage' element={<MyPage />} />
        <Route exact path='/admin/main' element={<AdminMain />} />
        <Route exact path='/sitemap' element={<SiteMap />} />
        <Route exact path='/reviewupdate' element={<ReviewUpdate />} />
        <Route exact path='/consulting_v1' element={<Consulting_v1 />} />
        <Route exact path='/consulting_v2' element={<Consulting_v2 />} />
        <Route exact path='/imagetest' element={<ImageTest />} />
      </Routes>
    </div>
  )
}

export default Router;