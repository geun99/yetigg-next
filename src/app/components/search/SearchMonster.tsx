import { IMonster } from "@/app/model/monster.model";
import MonsterCard from "../monster/MonsterCard";

const SearchMonster = ({ searchMonster }: { searchMonster: IMonster[] }) => {
  if (searchMonster.length === 0) {
    return <div>검색한 아이템이 존재하지 않습니다.</div>;
  }
  return (
    <>
      <h1>검색 몬스터 목록({searchMonster.length}종)</h1>
      <div className="main">
        {searchMonster.map((monster, idx) => {
          return <MonsterCard key={idx} idx={idx} mob={monster} />;
        })}
      </div>
    </>
  );
};

export default SearchMonster;
