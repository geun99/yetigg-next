"use client";

import { useEffect, useState } from "react";
import { IMonster } from "@/app/model/monster.model";
import { DetailStyle } from "@/app/components/monster/style";
import MonsterInfo from "@/app/components/monster/MonsterInfo";
import MonsterSpawn from "@/app/components/monster/MonsterSpawn";
import MonsterDrop from "@/app/components/monster/MonsterDrop";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams<{ id: string }>() || { id: "" };
  const [monster, setMonster] = useState<IMonster | null>(null);

  useEffect(() => {
    const fetchMonster = async () => {
      try {
        if (!id) {
          throw new Error("Monster ID not provided");
        }
        const response = await fetch(`/api/monster/getMonsterDetail?id=${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch monster: ${response.status}`);
        }
        const data = await response.json();
        setMonster(data);
      } catch (error) {
        console.error("Error fetching monster:", error);
      }
    };

    fetchMonster();
  }, [id]);

  if (!id) {
    return <div>올바르지 않은 몬스터 입니다.</div>;
  }

  if (!monster) {
    return <div>Loading...</div>;
  }

  return (
    <DetailStyle>
      <MonsterInfo monster={monster} />
      <MonsterSpawn monster={monster} />
      <MonsterDrop monster={monster} />
    </DetailStyle>
  );
};

export default Page;
