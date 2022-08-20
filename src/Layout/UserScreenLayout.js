import React from "react";
import Footer from "../Component/Footer";
import Appbar from "../Component/Appbar";

function UserScreenLayout({ children }) {
  return (
    <>
      <Appbar />
      {children}
      <Footer />
    </>
  );
}

export default UserScreenLayout;
