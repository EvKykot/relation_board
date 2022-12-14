import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CounterPage from "../pages/counter/counter-page";

const Router = () => (
  <Routes>
    <Route path="/counter" element={<CounterPage />} />
  </Routes>
);

export default Router;