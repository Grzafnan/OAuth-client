import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Pages/Shared/Navbar/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;