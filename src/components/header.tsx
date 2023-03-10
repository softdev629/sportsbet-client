import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <header className="bg-primary h-[var(--desktopNavHeight)] flex justify-center items-center">
          <div className="w-20 h-6">
            <Link to="/">
              <img src="/assets/img/csb-acro-logo-white.png" />
            </Link>
          </div>
        </header>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
