import React from "react";
import Header from "../layout/header";
import { Outlet } from "react-router-dom";
import Footer from "../layout/footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
