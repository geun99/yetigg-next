import { IItem } from "@/app/model/item.model";
import ItemCard from "../item/ItemCard";

const SearchItem = ({ searchItem }: { searchItem: IItem[] }) => {
  if (searchItem.length === 0) {
    return <div>검색한 아이템이 존재하지 않습니다.</div>;
  }
  return (
    <>
      <h1>검색 아이템 목록({searchItem.length}종)</h1>
      <div className="main">
        {searchItem.map((item, idx) => {
          return <ItemCard item={item} idx={idx} key={idx} />;
        })}
      </div>
    </>
  );
};

export default SearchItem;
