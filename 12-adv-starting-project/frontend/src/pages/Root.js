import React from "react";
import MainNavigation from '../components/MainNavigation';
import { Outlet } from "react-router-dom";

function RootLayout() {
  return <React.Fragment>
    <MainNavigation />
    <main>
      <Outlet />
    </main>
  </React.Fragment>
}

export default RootLayout;