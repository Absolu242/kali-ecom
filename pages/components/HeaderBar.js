import Image from "next/image";
import React, { useState } from "react";

import {
  Header,
  HeaderCenter,
  HeaderLeft,
  HeaderNav,
  HeaderRight,
} from "../../styles/header.styles";

export default function HeaderBar() {
  const [clicked, setClicked] = useState(true);

  return (
    <Header>
      <HeaderNav>
        <HeaderLeft>
          <button onClick={() => setClicked((clicked) => !clicked)}>
            <Image
              width={20}
              height={17}
              src="/menu.png"
              alt="menu"
              className="menu-icon"
            />
            <div className="logo">
              <Image width={56} height={23} src="/LogoWhite.png" alt="menu" />
            </div>
          </button>
        </HeaderLeft>

        <HeaderCenter>
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
        </HeaderCenter>

        <HeaderRight>
          <button className="btn btn-prim">LOGIN</button>
          <button className="btn btn-secn"> GET STARTED</button>
        </HeaderRight>
      </HeaderNav>
    </Header>
  );
}
