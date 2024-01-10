/**
 * 
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignIn } from './pages';

const Router = () => (
  <Routes>
    <Route exact path="/sign" element={<SignIn />} />
    {/* <Route exact path="/*" component={() => <h1>Not Found</h1>} /> */}
  </Routes>
)

export default Router;