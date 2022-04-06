import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  HeaderContainer,
  HeaderCenter,
  HeaderLeft,
  HeaderNav,
  HeaderRight,
} from "../styles/header.styles";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function HeaderBar({ single }) {
  const [clicked, setClicked] = useState(true);
  const router = useRouter();

  const cart = useSelector((state) => state.cart);

  return (
    <HeaderContainer>
      <HeaderNav>
        <HeaderLeft>
          {/* {!single && (
            <button onClick={() => setClicked((clicked) => !clicked)}>
              <Image
                width={20}
                height={17}
                src="/menu.png"
                alt="menu"
                className="menu-icon"
              />
            </button>
          )} */}
          <button>
            <div className="logo">
              <Link href="/">
                <a>
                  <Image
                    width={56}
                    height={23}
                    src="/Logo.png"
                    alt="menu"
                    priority={true}
                  />
                </a>
              </Link>
            </div>
          </button>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/catalog">
            <a>Catalog</a>
          </Link>
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
          <Link href="/cart">
            <a>
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

              <span className="index">{cart.length}</span>
            </a>
          </Link>
        </HeaderRight>
      </HeaderNav>
    </HeaderContainer>
  );
}
