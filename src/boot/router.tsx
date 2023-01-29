import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardPage from "../pages/board/board-page";

const Router = () => (
  <Routes>
    <Route path="/" element={<BoardPage />} />
  </Routes>
);

export default Router;
