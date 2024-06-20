"use client";

import styled from "styled-components";

export const HeaderStyle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: start;
  padding: 20px;
  background: black;

  a {
    text-decoration: none;
    padding-right: 20px;
    color: white;
    font-size: 1.2rem;
  }
`;

export const FooterStyle = styled.div`
  color: white;
  background: transparent;
  padding: 20px;
  border-radius: 10px;
`;

export const ScrollTopButtonStyle = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 2.5rem;
  display: flex;
`;

export const SearchBoxStyle = styled.div`
  .searchBox {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    width: 500px;
    height: 50px;
    margin: 100px;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
  }
  .search {
    width: 80%;
    height: 100%;
    padding-left: 10px;
    font-size: 24px;
    border: none;
    outline: none;
    text-align: center;
    color: #282c34;
  }
  .search:focus::placeholder {
    color: transparent;
  }
  .searchButton {
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: #fff;
  }
  @media (max-width: 768px) {
    .searchBox {
      width: 90%;
      height: 50px;
      margin: 50px;
      font-size: 1.5rem;
      position: relative;
      right: 30px;
    }
    .search {
      width: 80%;
      height: 100%;
      padding-left: 10px;
      font-size: 1rem;
    }
    .searchButton {
      font-size: 1.5rem;
    }
  }
`;

export const ButtonStyle = styled.div`
  button {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 20px;
    margin-right: 5px;
    border-radius: 5px;
    background: #282c34;
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
  }
`;
