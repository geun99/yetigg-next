"use client";

import styled from "styled-components";

import SearchBox from "./components/common/searchBox";
import Image from "next/image";
import YETI from "../../public/yeti.png";
import { MainStyle } from "./style";

const Page = () => {
  return (
    <MainStyle>
      <h1>YETI.GG</h1>
      <Image src={YETI} alt="yeti" className="yeti" />
      <SearchBox />
    </MainStyle>
  );
};

export default Page;
