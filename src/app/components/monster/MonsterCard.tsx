"use client";

import { MonsterCardStyle } from "./style";
import Image from "next/image";
import { IMonster } from "@/app/model/monster.model";
import { useRouter } from "next/navigation";
import { CardStyle } from "../item/style";
import { formatNumber } from "@/app/utils/format";

interface Props {
  idx: number;
  mob: IMonster;
}

const MonsterCard = ({ idx, mob }: Props) => {
  const router = useRouter();
  return (
    <CardStyle
      className="card"
      key={idx}
      onClick={() => {
        router.push(`/monster/${mob.id}`);
      }}
    >
      <MonsterCardStyle>
        <Image src={mob.img} alt={mob.name} width={100} height={100} />
        <h2>{mob.name}</h2>
        <div className="inform">
          <p>
            <span className="level">LEVEL</span> {formatNumber(mob.level)}
          </p>
          <p>
            <span className="hp">HP</span> {formatNumber(mob.hp)}
          </p>
          <p>
            <span className="exp">EXP</span> {formatNumber(mob.exp)}
          </p>
        </div>
      </MonsterCardStyle>
    </CardStyle>
  );
};

export default MonsterCard;
