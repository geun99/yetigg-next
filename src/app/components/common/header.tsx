"use client";

import Link from "next/link";
import { HeaderStyle } from "./style";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="nav-left">
        <Link href="/" className="nav-main">
          YETI.GG
        </Link>
        <Link href="/monster">Monster</Link>
        <Link href="/item">Item</Link>
      </div>
    </HeaderStyle>
  );
};

export default Header;
