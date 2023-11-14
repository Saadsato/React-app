import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./styles/Main.scss";

const Main = () => {
  const openFacebookPage = () => {
    window.open("https://www.facebook.com", "_blank");
  };
  const openTwitterPage = () => {
    window.open("https://www.twitter.com", "_blank");
  };
  const openInstaPage = () => {
    window.open("https://www.instagram.com", "_blank");
  };
  const openLinkedinPage = () => {
    window.open("https://www.linkedin.com", "_blank");
  };
  const openPinterestPage = () => {
    window.open("https://www.pinterest.com", "_blank");
  };

  return (
    <div className="main" id="home">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hey There !</p>
            <h1>I am Saad</h1>
            <p>Front & back end developer</p>

            <div className="icons">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter
                  className="icon twitter-icon"
                  onClick={openTwitterPage}
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  className="icon instagram-icon"
                  onClick={openInstaPage}
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn
                  className="icon linkedin-icon"
                  onClick={openLinkedinPage}
                />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Pinterest
                  className="icon pinterest-icon"
                  onClick={openPinterestPage}
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  className="icon facebook-icon"
                  onClick={openFacebookPage}
                />
              </a>
            </div>
            <div className="buttons">
              <button>See Me</button>
              <button>Hire Me</button>
            </div>
          </div>
        </div>

        <div className="main__img">{/* */}</div>
      </div>
    </div>
  );
};

export default Main;
