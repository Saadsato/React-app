import { Close, MenuOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./styles/Header.scss";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <h1>S.S</h1>
      </div>

      <nav className={active ? "navbar active" : "navbar"}>
        <ul>
          <div className="closed">
            <Close className="close" onClick={showMenu} />
          </div>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-1}
              duration={500}
            >
              <b>About</b>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <b>Contact</b>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <b>Portfolio</b>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="changer">
        <MenuOutlined className="menu" onClick={showMenu} />
      </div>
    </div>
  );
};

export default Header;
