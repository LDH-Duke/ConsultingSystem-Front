/**
 * 
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Counselor, Favorite, EditProfile, Search, Donation } from './pages';

const Router = () => (
  <Routes>
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/counselor" element={<Counselor />} />
    <Route exact path="/favorite" element={<Favorite />} />
    <Route exact path="/editprofile" element={<EditProfile />} />
    <Route exact path="/search" element={<Search />} />
    <Route exact path="/donation" element={<Donation />} />
    {/* <Route exact path="/*" component={() => <h1>Not Found</h1>} /> */}
  </Routes>
)

export default Router;