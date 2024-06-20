import styled from "styled-components";

import { FewMonsterSpawnStyle, MonsterSpawnStyle } from "./style";
import { IMonster } from "@/app/model/monster.model";

const MonsterSpawn = ({ monster }: { monster: IMonster }) => {
  if (monster?.location.length < 5) {
    return (
      <FewMonsterSpawnStyle>
        <h2>스폰장소</h2>
        <div className="location-container">
          {monster?.location.map((location: string, idx) => {
            return (
              <p className="location" key={idx}>
                {location}
              </p>
            );
          })}
        </div>
      </FewMonsterSpawnStyle>
    );
  }
  return (
    <MonsterSpawnStyle>
      <h2>스폰장소</h2>
      <div className="location-container">
        {monster?.location.map((location: string, idx) => {
          return (
            <p className="location" key={idx}>
              {location}
            </p>
          );
        })}
      </div>
    </MonsterSpawnStyle>
  );
};
export default MonsterSpawn;
