import { IMonster } from "@/app/model/monster.model";
import { formatNumber } from "@/app/utils/format";
import Image from "next/image";
import { InfoStyle } from "./style";

const MonsterInfo = ({ monster }: { monster: IMonster }) => {
  return (
    <InfoStyle>
      <Image
        src={monster?.move}
        alt={monster?.name}
        width={1000}
        height={1000}
        className="detail-item-img"
      />
      <h1>{monster.name}</h1>
      <div className="feature">
        <div className="left">
          <h2>능력치</h2>
          <div className="inform">
            <p className="detail-info level">
              Level {formatNumber(monster.level)}
            </p>
            <p className="detail-info exp">Exp {formatNumber(monster.exp)}</p>
            <p className="detail-info hp">HP {formatNumber(monster.hp)}</p>
            <p className="detail-info mp">MP {formatNumber(monster.mp)}</p>
          </div>
        </div>

        <div className="right">
          <h2>상세 정보</h2>
          <div className="inform">
            {monster.feature.map((feat, idx) => {
              return <p key={idx}>{feat}</p>;
            })}
          </div>
        </div>
      </div>
    </InfoStyle>
  );
};

export default MonsterInfo;
