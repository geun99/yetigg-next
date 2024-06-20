"use client";

import styled from "styled-components";

export const ListStyle = styled.div`
  background-color: black;
  .container {
    h1 {
      margin-bottom: 20px;
    }
  }
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    .main {
      grid-template-columns: 1fr;
    }
  }
`;
