import React, { useEffect, useState } from "react";
import "./../styles/Navbar.css";

function Navbar() {
  const [show, handleshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else {
        handleshow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`Navbar ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        alt="Netflix Logo"
        src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=681&h=383&crop=1"
      />

      <img
        src="https://www.pinclipart.com/picdir/middle/532-5328945_menu-bar-icon-white-clipart-png-download-menu.png"
        alt=""
        className="nav__menu"
      />
    </div>
  );
}

export default Navbar;
