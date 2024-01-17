/**
 * 
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignIn, Home, Counselor, Favorite } from './pages';

const Router = () => (
  <Routes>
    <Route exact path="/sign" element={<SignIn />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/counselor" element={<Counselor />} />
    <Route exact path="/favorite" element={<Favorite />} />
    {/* <Route exact path="/*" component={() => <h1>Not Found</h1>} /> */}
  </Routes>
)

export default Router;