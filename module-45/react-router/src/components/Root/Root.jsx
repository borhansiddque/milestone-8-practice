import React from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>
      <div className="flex">
        <Sidebar></Sidebar>
        {isNavigating && <span>Loading.....</span>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
