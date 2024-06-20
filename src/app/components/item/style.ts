"use client";

import styled from "styled-components";

export const CardStyle = styled.div`
  gap: 12px;
  text-decoration: none;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  box-shadow: 1px 1px 1px 0.1;
  border-radius: 5px;
  margin: 20px;
  background: #282c34;
  cursor: pointer;
  .inform {
    margin: 6px;
  }
  img {
    height: auto;
    width: auto;
  }

  @media (max-width: 768px) {
    height: 200px;

    img {
      padding-top: 10px;
      max-height: 100px;
    }
  }
`;

export const ButtonsStyle = styled.div`
  h2 {
    font-size: 1rem;
  }
  .item-p {
    margin-bottom: 10px;
  }
  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      width: 60%;
      font-size: 1.25rem;
      border: 1px solid gray;
      border-radius: 5px;
      margin: 10px 20px;
      padding: 10px 20px;
      background-color: black;
      cursor: pointer;
      &:hover {
        background-color: gray;
      }
    }
    .btns {
      display: none;
      flex-direction: column;
      gap: 5px;
    }
    .active {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
`;

export const DropStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .detail-drop {
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;

    img {
      width: auto;
      height: auto;
    }
    a {
      text-decoration: none;
      color: white;
    }

    .box {
      background: black;
      margin: 10px;
      border-radius: 5px;
      border: 1px solid gray;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5px;
      width: 150px;
      height: 150px;

      img {
        padding-bottom: 10px;
        max-width: 100px;
      }
    }
  }
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    .detail-drop {
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;
      .box {
        width: 100px;
        height: 100px;
        position: relative;
        img {
          padding-bottom: 0px;
        }
      }
    }
  }
`;

export const FewDropStyle = styled.div`
  .detail-drop {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      text-decoration: none;
      color: white;
    }

    img {
      width: auto;
      height: auto;
    }
    .box {
      background: black;
      margin: 10px;
      border-radius: 5px;
      border: 1px solid gray;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 150px;

      img {
        padding-bottom: 10px;
        max-width: 100px;
      }
    }
  }
`;
