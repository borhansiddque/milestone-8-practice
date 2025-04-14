import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;