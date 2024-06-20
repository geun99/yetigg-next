"use client";

import styled from "styled-components";

export const MonsterCardStyle = styled.div`
  .level {
    color: yellow;
  }
  .hp {
    color: red;
  }
  .exp {
    color: lightgreen;
  }
`;

export const MonsterSpawnStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .location-container {
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 20px;
    p {
      border: 1px solid gray;
      border-radius: 5px;
      margin: 10px 20px;
      padding: 10px 20px;
      width: 200px;
      background-color: black;
    }
  }
  @media (max-width: 768px) {
    .location-container {
      grid-template-columns: repeat(1, 1fr);
      .location {
        width: 80%;
      }
    }
  }
`;

export const FewMonsterSpawnStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .location-container {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    p {
      border: 1px solid gray;
      border-radius: 5px;
      margin: 10px 20px;
      padding: 10px 20px;
      width: 200px;
      background-color: black;
    }
  }
  @media (max-width: 768px) {
    .location-container {
      flex-direction: column;
    }
  }
`;
export const InfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: auto;
    width: auto;
    min-width: 100px;
  }
  .feature {
    display: flex;
    margin-bottom: 20px;
    width: 1200px;
  }

  .left,
  .right {
    flex: 1;
    justify-content: start;
    width: 50%;
    h2 {
      margin: 20px;
    }
  }
  .item-info {
    align-items: center;
    display: flex;
    flex-direction: space-between;
    justify-content: center;
  }

  .inform {
    p {
      background-color: #000;
      border: 1px px solid gray;
      border-radius: 5px;
      font-size: 16px;
      margin: 2px auto 20px;
      padding: 10px 20px;
      width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      border: 1px solid gray;
    }
  }
  @media (max-width: 768px) {
    .feature {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin-bottom: 20px;
    }
    .left,
    .right {
      flex: 1;
      width: 100%;
      h2 {
        margin: 10px;
      }
    }
    .inform {
      p {
        width: 100%;
      }
    }
  }
`;

export const DetailStyle = styled.div`
  padding: 20px;
`;
