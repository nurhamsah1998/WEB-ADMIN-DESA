import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import DrawerMenu from "./Component/Drawer/DrawerMenu";
import Router from "./router";

function App() {
  return (
    <BrowserRouter>
      <DrawerMenu>
        <Router />
      </DrawerMenu>
    </BrowserRouter>
  );
}

export default App;
