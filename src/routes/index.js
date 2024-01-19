/**
 * 
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Counselor, Favorite, EditProfile, Search, Donation, SignIn, Signup, Main, Coin, PriceDetail, Question, ConsultingSignUp } from './pages';
import Header from '../components/Header'

const Router = () => (
  <div>
    <Header />
    <Routes>
      <Route exact path="/counselor" element={<Counselor />} />
      <Route exact path="/favorite" element={<Favorite />} />
      <Route exact path="/editprofile" element={<EditProfile />} />
      <Route exact path="/search" element={<Search />} />
      <Route exact path="/donation" element={<Donation />} />
      <Route exact path='/' element={<Main />} />
      <Route exact path='/sign' element={<SignIn />} />
      <Route exact path='/signup' element={<Signup />} />
      <Route exact path='/coin' element={<Coin />} />
      <Route exact path='/pricedetail' element={<PriceDetail />} />
      <Route exact path='/question' element={<Question /> } />
      <Route exact path='/consultingsignup' element={<ConsultingSignUp />} />
    </Routes>
  </div>
)

export default Router;