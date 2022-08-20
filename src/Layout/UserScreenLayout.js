import React from "react";
import Hero from "../Component/Hero";
import Footer from "../Component/Footer";
import Appbar from "../Component/Appbar";

function UserScreenLayout({ children }) {
  return (
    <>
      <Appbar />
      <Hero />
      {children}
      <Footer />
    </>
  );
}

export default UserScreenLayout;
