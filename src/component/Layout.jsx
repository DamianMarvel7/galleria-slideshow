import React, { useEffect, useState } from "react";
import logo from "../assets/shared/logo.svg";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const [layoutText, setLayoutText] = useState("Start Slideshow");

  useEffect(() => {
    if (location.pathname === "/") {
      setLayoutText("Start Slideshow");
    } else {
      setLayoutText("Stop Slideshow");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="layout flex container">
        <Link to="/">
          <img src={logo} alt="" className="logo-img" />
        </Link>
        <Link to="/">
          <button className="btn1">{layoutText}</button>
        </Link>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
