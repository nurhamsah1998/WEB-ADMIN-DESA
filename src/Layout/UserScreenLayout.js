import React from "react";
import Hero from "../Component/Hero";
import Footer from "../Component/Footer";

function UserScreenLayout({ children }) {
  return (
    <>
      <Hero />
      {children}
      <Footer />
    </>
  );
}

export default UserScreenLayout;
