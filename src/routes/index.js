import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AskAdmin, Exchange, CounselorHome, CounselorDetail, Favorite, EditProfile, Search, Donation, SignIn, Signup, Main, Coin, PriceDetail, Question, ConsultingSignUp, Review, Error, Consultinghistory, Product, EditCounselor } from './pages';
import Header from '../components/Header'

const Router = () => (
  <div>
    <Header />
    <Routes>
      <Route exact path="/counselor/:counselor_id" element={<CounselorDetail />} />
      <Route exact path="/favorite" element={<Favorite />} />
      <Route exact path="/editprofile" element={<EditProfile />} />
      <Route exact path="/search" element={<Search />} />
      <Route exact path="/donation/:counselor_id" element={<Donation />} />
      <Route exact path='/' element={<Main />} />
      <Route exact path='/sign' element={<SignIn />} />
      <Route exact path='/signup' element={<Signup />} />
      <Route exact path='/coin' element={<Coin />} />
      <Route exact path='/pricedetail' element={<PriceDetail />} />
      <Route exact path='/question/:counselor_id' element={<Question /> } />
      <Route exact path='/consultingsignup' element={<ConsultingSignUp />} />
      <Route exact path='/review' element={<Review />} />
      <Route exact path='/*' element={<Error />} />
      <Route exact path='/counselor/home' element={<CounselorHome />} />
      <Route exact path='/exchange' element={<Exchange />} />
      <Route exact path='/askadmin' element={<AskAdmin />} />
      <Route exact path='/consultinghistory' element={<Consultinghistory />} />
      <Route exact path='/product' element={<Product />} />
      <Route exact path='/editcounselor' element={<EditCounselor />} />
    </Routes>
  </div>
)

export default Router;