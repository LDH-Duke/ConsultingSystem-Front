import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import cookie from '../cookie';

// 공통 페이지
import { Error, Main, Search, Review, SignIn, CounselorDetail, Sitemap, ConsultingV1, ConsultingV2, AskAdmin, UpdateAskAdmin } from './pages';
// 회원 페이지
import { UserUpdateReview, UserWriteReview, UserReview, UserProfile, UserMyMenu, UserDonation, UserSignUp, UserChargeCoin, UserFavorite } from './pages';
// 상담사 페이지
import { CounselorSignUp, CounselorAddProduct, CounselorProfile, CounselorCoin, CounselorMain, CounselorConsultingHistory } from './pages';

const Router = () => {
  const navigate = useNavigate();

  const [hasCookies, setHasCookies] = useState(false);

  const setCookies = (data) => {
    cookie.setCookie('id', data.data.id, {
      path: '/',
      secure: '/',
    });

    cookie.setCookie('token', data.token, {
      path: '/',
      secure: '/',
    });

    cookie.setCookie('userType', data.data.userType, {
      path: '/',
      secure: '/',
    });

    setHasCookies(true);
  }

  const removeCookies = () => {
    cookie.remove('id', { path: '/' }, 1000);
    cookie.remove('token', { path: '/' }, 1000);

    setHasCookies(false);
  }

  return (
    <div className='App'>
      {/* <Header hasCookies={hasCookies} removeCookies={removeCookies} /> */}
      <Routes>
        {/* 공통 */}
        <Route exact path='/' element={<Main />} />
        <Route exact path='/*' element={<Error />} />
        <Route exact path='/signin' element={<SignIn setCookies={setCookies} />} />
        <Route exact path='/counselor/:counselor_id' element={<CounselorDetail setCookies={setCookies} />} />
        <Route exact path='/sitemap' element={<Sitemap setCookies={setCookies} />} />
        <Route exact path='/review' element={<Review setCookies={setCookies} />} />
        <Route exact path='/search' element={<Search setCookies={setCookies} />} />
        <Route exact path='/consultingv1' element={<ConsultingV1 setCookies={setCookies} />} />
        <Route exact path='/consultingv2' element={<ConsultingV2 setCookies={setCookies} />} />
        <Route exact path='/askadmin/:params' element={<AskAdmin />} />
        <Route exact path='/askadmin/update/:ask_id' element={<UpdateAskAdmin />} />

        {/* 회원 */}
        <Route exact path='/user/signup' element={<UserSignUp setCookies={setCookies} />} />
        <Route exact path='/user/coin' element={<UserChargeCoin setCookies={setCookies} />} />
        <Route exact path='/user/favorite' element={<UserFavorite setCookies={setCookies} />} />
        <Route exact path='/user/donation' element={<UserDonation setCookies={setCookies} />} />
        <Route exact path='/user/mymenu' element={<UserMyMenu setCookies={setCookies} />} />
        <Route exact path='/user/profile' element={<UserProfile setCookies={setCookies} />} />
        <Route exact path='/user/review' element={<UserReview setCookies={setCookies} />} />
        <Route exact path='/user/review/write' element={<UserWriteReview setCookies={setCookies} />} />
        <Route exact path='/user/review/update' element={<UserUpdateReview setCookies={setCookies} />} />

        {/* 상담사 */}
        <Route exact path='/counselor' element={<CounselorMain />} />
        <Route exact path='/counselor/signup' element={<CounselorSignUp />} />
        <Route exact path='/counselor/addproduct' element={<CounselorAddProduct />} />
        <Route exact path='/counselor/coin' element={<CounselorCoin />} />
        <Route exact path='/counselor/profile' element={<CounselorProfile />} />
        <Route exact path='/counselor/consultinghistory' element={<CounselorConsultingHistory />} />

      </Routes>
    </div>
  )
}

export default Router;