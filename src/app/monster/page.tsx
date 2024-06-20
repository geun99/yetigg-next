"use client";

import { useDispatch, useSelector } from "react-redux";
import { IMonster } from "../model/monster.model";
import { IItem } from "../model/item.model";
import { ListStyle } from "../item/style";
import MonsterSortButtons from "../components/monster/MonsterSortButtons";
import MonsterLocationButtons from "../components/monster/MonsterLocationButtons";
import MonsterCard from "../components/monster/MonsterCard";
import ScrollTopButton from "../components/common/scrollTopButton";
import { useEffect } from "react";
import { initMonster } from "../store/monsterSlice";

export interface stateType {
  monster: IMonster[];
  item: IItem[];
}
const Page = () => {
  const dispatch = useDispatch();
  const monsters = useSelector((state: stateType) => state.monster);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/monster/getMonsters", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(
            `네트워크 응답이 올바르지 않습니다: ${response.status}`
          );
        }
        const data = await response.json();
        dispatch(initMonster(data));
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };
    fetchItems();
  }, [dispatch]);
  return (
    <ListStyle>
      <div className="container">
        <h1>몬스터 목록({monsters.length}종)</h1>
        <div className="btn-container">
          <MonsterSortButtons />
          <MonsterLocationButtons />
        </div>
        <div className="main">
          {monsters.map((monster: IMonster, idx: number) => {
            return <MonsterCard key={idx} idx={idx} mob={monster} />;
          })}
        </div>
      </div>
      <ScrollTopButton />
    </ListStyle>
  );
};

export default Page;
