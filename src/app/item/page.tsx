"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IItem } from "../model/item.model";
import { ListStyle } from "./style";
import ItemCard from "../components/item/ItemCard";
import ScrollTopButton from "../components/common/scrollTopButton";
import ItemClassButtons from "../components/item/ItemClassButtons";
import ItemTypeButtons from "../components/item/ItemTypeButtons";
import { initItem } from "../store/itemSlice";
import { stateType } from "../monster/page";

const Page = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: stateType) => state.item);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/item/getItems", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(
            `네트워크 응답이 올바르지 않습니다: ${response.status}`
          );
        }
        const data = await response.json();
        dispatch(initItem(data));
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };
    fetchItems();
  }, [dispatch]);

  return (
    <ListStyle>
      <div className="container">
        <h1>아이템 목록({items.length}종)</h1>
        <div className="btn-container">
          <ItemTypeButtons />
          <ItemClassButtons />
        </div>
        <div className="main">
          {items.map((item: IItem, idx: number) => {
            return <ItemCard item={item} idx={idx} key={idx} />;
          })}
        </div>
      </div>
      <ScrollTopButton />
    </ListStyle>
  );
};

export default Page;
