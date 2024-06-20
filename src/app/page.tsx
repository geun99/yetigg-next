"use client";

import styled from "styled-components";

import SearchBox from "./components/common/searchBox";
import Image from "next/image";
import YETI from "../../public/yeti.png";

const Page = () => {
  return (
    <MainStyle>
      <h1>YETI.GG</h1>
      <Image src={YETI} alt="yeti" className="yeti" />
      <SearchBox />
    </MainStyle>
  );
};

const MainStyle = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  h1 {
    color: white;
    font-size: 6rem;
    padding-top: 20px;
  }
  img {
    padding-top: 40px;
    width: 300px;
    height: auto;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 4rem;
    }

    img {
      padding-top: 10px;
      width: 250px;
      height: auto;
    }
  }
`;

export default Page;
