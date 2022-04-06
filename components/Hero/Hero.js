import Link from "next/link";
import React, { useState } from "react";
import {
  Header,
  HeaderBottom,
  HeaderCenter,
  HeaderLeft,
  HeaderMain,
  HeaderNav,
  HeaderRight,
} from "./Hero.styles";

export const Hero = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Header
      className={clicked ? "activate" : ""}
      style={{
        backgroundImage: `url("./Image4.jpg")`,
      }}
    >
      <HeaderNav>
        <HeaderLeft>
          <button onClick={() => setClicked((clicked) => !clicked)}>
            {clicked ? (
              <img src="/IconsClose.png" alt="menu" className="menu-icon" />
            ) : (
              <img src="/IconsGrid.png" alt="menu" className="menu-icon" />
            )}
          </button>
          {clicked ? (
            <img src="/Logo.png" alt="menu" className="logo-icon" />
          ) : (
            <img src="/LogoWhite.png" alt="menu" className="logo-icon" />
          )}
        </HeaderLeft>

        <HeaderCenter className={clicked ? "activate" : ""}>
          <div>
            <a href="https://google.com">Fb</a>
            <div className="separator"></div>
            <a href="https://google.com">Tw</a>
            <div className="separator"></div>
            <a href="https://google.com">In</a>
          </div>
        </HeaderCenter>

        <HeaderRight className={clicked ? "activate" : ""}>
          <button className="btn btn-prim">LOGIN</button>
          <button className="btn btn-secn"> GET STARTED</button>
        </HeaderRight>
      </HeaderNav>

      <HeaderMain className={clicked ? "activate" : ""}>
        <div className="mainHidden">
          <div className="mainHidden__left">
            <div className="socials">
              <a href="https://google.com">
                <img src="/IconsSocialsFacebook.png" alt="facebook icon" />
              </a>
              <a href="https://google.com">
                <img src="/IconsSocialsTwitter.png" alt="twitter icon" />
              </a>
              <a href="https://google.com">
                <img src="/IconsSocialsFacebook.png" alt="intagram icon" />
              </a>
            </div>

            <div className="address">
              <p className="city">Los Angeles</p>
              <p className="ref">
                248 N Rodeo DR, Beverly Hills,
                <br />
                CA 902010
              </p>
            </div>

            <div className="address">
              <p className="city">San Francisco</p>
              <p className="ref">
                156 Geary St, San Francisco,
                <br />
                CA 90108
              </p>
            </div>
          </div>

          <div className="mainHidden__right">
            <ul>
              <li>
                <Link href="/home">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/catalog">
                  <a>Catalog</a>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <a>Cart</a>
                </Link>
              </li>
              <li>
                <Link href="/account">
                  <a>Account</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </HeaderMain>

      <HeaderBottom className={clicked ? "activate" : ""}>
        <>
          <div className="item">
            <h1 className="item-name">Welcome</h1>
            <Link href="/catalog">
              <a>
                <button className="item-btn">Browse our Catalog ></button>
              </a>
            </Link>
          </div>
        </>
      </HeaderBottom>
    </Header>
  );
};
