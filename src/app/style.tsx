"use client";

import styled from "styled-components";

export const MainStyle = styled.div`
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
