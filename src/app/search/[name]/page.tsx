"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { IItem } from "../../model/item.model";
import { IMonster } from "../../model/monster.model";
import { ListStyle } from "../../item/style";
import SearchMonster from "../../components/search/SearchMonster";
import SearchItem from "../../components/search/SearchItem";
import ScrollTopButton from "../../components/common/scrollTopButton";

const Page = () => {
  const { name } = useParams<{ name: string }>() || { name: "" };
  const dispatch = useDispatch();

  let [searchMonsters, setSearchMonsters] = useState<IMonster[]>([]);
  let [searchItems, setSearchItems] = useState<IItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const decodedName = decodeURI(name);
        const response = await fetch(
          `/api/search/getSearchItem?name=${decodedName}`,
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error(
            `네트워크 응답이 올바르지 않습니다: ${response.status}`
          );
        }
        const data = await response.json();
        setSearchItems(data);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    const fetchMonsters = async () => {
      try {
        const decodedName = decodeURI(name);
        const response = await fetch(
          `/api/search/getSearchMonster?name=${decodedName}`,
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error(
            `네트워크 응답이 올바르지 않습니다: ${response.status}`
          );
        }
        const data = await response.json();
        setSearchMonsters(data);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };

    fetchItems();
    fetchMonsters();
  }, [name, dispatch]);

  return (
    <ListStyle>
      <SearchMonster searchMonster={searchMonsters} />
      <SearchItem searchItem={searchItems} />
      <ScrollTopButton />
    </ListStyle>
  );
};

export default Page;
