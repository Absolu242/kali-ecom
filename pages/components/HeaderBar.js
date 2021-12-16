import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  Header,
  HeaderCenter,
  HeaderLeft,
  HeaderNav,
  HeaderRight,
} from "../../styles/header.styles";

export default function HeaderBar({ single }) {
  const [clicked, setClicked] = useState(true);
  const router = useRouter();

  return (
    <Header>
      <HeaderNav>
        <HeaderLeft>
          {!single && (
            <button onClick={() => setClicked((clicked) => !clicked)}>
              <Image
                width={20}
                height={17}
                src="/menu.png"
                alt="menu"
                className="menu-icon"
              />
            </button>
          )}
          <button>
            <div className="logo">
              <Image width={56} height={23} src="/LogoWhite.png" alt="menu" />
            </div>
          </button>
        </HeaderLeft>

        <HeaderCenter>
          {single ? (
            <button onClick={() => router.back()} className="btn-back">
              <Image
                width={20}
                height={17}
                src="/IconsArrow.png"
                alt="menu"
                className="menu-icon"
              />{" "}
              <p>BACK</p>
            </button>
          ) : (
            <div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fb
              </a>
              <div className="separator"></div>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tw
              </a>
              <div className="separator"></div>
              <a
                href="https://Instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                In
              </a>
            </div>
          )}
        </HeaderCenter>

        <HeaderRight>
          <button className="btn btn-prim">LOGIN</button>
          <button className="btn ">
            {" "}
            <Image
              width={17}
              height={17}
              src="/IconsCart.png"
              alt="menu"
              className="menu-icon"
            />{" "}
          </button>
        </HeaderRight>
      </HeaderNav>
    </Header>
  );
}
