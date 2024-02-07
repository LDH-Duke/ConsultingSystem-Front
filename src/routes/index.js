import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import { CounselorAskList, ImageTest, Consulting_v2, Consulting_v1, SiteMap, EditCounselor, Product, WriteReview, AskAdmin, Exchange, CounselorHome, CounselorDetail, Favorite, EditProfile, Search, Donation, SignIn, Signup, Main, Coin, PriceDetail, Question, ConsultingSignUp, Review, Error, Consultinghistory, MyPage, AdminMain, ReviewUpdate, UserAskHistory } from './pages';
import Header from '../components/Header'
import { TestPresenter } from '../components/Layout/TestPresenter';
import { TestCounselorMainPresenter } from '../components/Layout/TestCounselorMainPresenter';
import cookie from '../cookie';

// 공통 페이지
import { Error, Main, Search, Review, SignIn, CounselorDetail, Sitemap, ConsultingV1, ConsultingV2, AskAdmin, UpdateAskAdmin } from './pages'; 
// 회원 페이지
import { UserProfile, UserMyMenu, UserDonation, UserSignUp, UserChargeCoin, UserFavorite, UserReview, UserWriteReview, UserUpdateReview } from './pages'; 
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
        <Route exact path='/askadmin/update/:ask_id' element = {<UpdateAskAdmin />} />

        {/* 회원 */}
        <Route exact path='/user/signup' element={<UserSignUp setCookies={setCookies} />} />
        <Route exact path='/user/coin' element={<UserChargeCoin setCookies={setCookies} />} />
        <Route exact path='/user/favorite' element={<UserFavorite setCookies={setCookies} />} />
        <Route exact path='/user/donation' element={<UserDonation setCookies={setCookies} />} />
        <Route exact path='/user/mymenu' element={<UserMyMenu setCookies={setCookies} />} />
        <Route exact path='/user/profile' element={<UserProfile setCookies={setCookies} />} />
        <Route exact path='/user/review' element={<UserReview setCookies={setCookies} />} />
        <Route exact path='/user/writereview' element={<UserWriteReview setCookies={setCookies} />} />
        <Route exact path='/user/updatereview' element={<UserUpdateReview setCookies={setCookies} />} />

        {/* 상담사 */}
        <Route exact path='/counselor' element={<CounselorMain />} />
        <Route exact path='/counselor/signup' element={<CounselorSignUp />} />
        <Route exact path='/counselor/addproduct' element={<CounselorAddProduct />} />
        <Route exact path='/counselor/coin' element={<CounselorCoin />} />
        <Route exact path='/counselor/profile' element={<CounselorProfile  />} />
        <Route exact path='/counselor/consultinghistory' element={<CounselorConsultingHistory />} />
        {/* <Route exact path="/counselor/:counselor_id" element={<CounselorDetail />} />
        <Route exact path="/favorite/:user_id" element={<Favorite navigate={navigate} />} /> */}
        {/* <Route exact path="/editprofile" element={<EditProfile />} /> */}
        {/* <Route exact path="/search" element={<Search />} />
    <div>
      <Header hasCookies={hasCookies} removeCookies={removeCookies} />
      <Routes>
        <Route exact path="/counselor/:counselor_id" element={<CounselorDetail />} />
        <Route exact path="/favorite/:user_id" element={<Favorite navigate={navigate} />} />
        {/* <Route exact path="/editprofile" element={<EditProfile />} /> */}
        {/* <Route exact path="/search" element={<Search />} />
        <Route exact path="/donation/:counselor_id" element={<Donation />} />
        <Route exact path='/' element={<Main />} />
        <Route exact path='/sign' element={<SignIn setCookies={setCookies} />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/coin' element={<Coin />} />
        <Route exact path='/pricedetail' element={<PriceDetail navigate={navigate}/>} />
        <Route exact path='/question/:counselor_id' element={<Question navigate={navigate} />} />
        <Route exact path='/consultingsignup' element={<ConsultingSignUp />} />
        <Route exact path='/review' element={<Review />} />
        <Route exact path='/*' element={<Error />} />
        <Route exact path='/counselor/home/:counselor_id' element={<CounselorHome />} />
        <Route exact path='/exchange' element={<Exchange />} />
        <Route exact path='/askadmin' element={<AskAdmin navigate={navigate}/>} />
        <Route exact path='/writereview/:counselor_id' element={<WriteReview />} />
        <Route exact path='/consultinghistory' element={<Consultinghistory />} />
        <Route exact path='/product/:counselor_id' element={<Product />} />
        <Route exact path='/editcounselor/:counselor_id' element={<EditCounselor />} />
        <Route exact path='/mypage' element={<MyPage navigate={navigate}/>} />
        <Route exact path='/admin/main' element={<AdminMain />} />
        <Route exact path='/sitemap' element={<SiteMap />} />
        <Route exact path='/reviewupdate' element={<ReviewUpdate />} />
        <Route exact path='/consulting_v1' element={<Consulting_v1 />} />
        <Route exact path='/consulting_v2' element={<Consulting_v2 />} />
        <Route exact path='/imagetest' element={<ImageTest />} />
        <Route exact path='/counselorasklist/:counselor_id' element={<CounselorAskList />} />
        <Route exact path='/useraskhistory/:user_id' element={<UserAskHistory navigate={navigate}/>} /> */}
      </Routes>
    </div>
  )
}

export default Router;