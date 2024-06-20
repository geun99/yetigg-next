import { IItem } from "@/app/model/item.model";
import { InfoStyle } from "../monster/style";
import Image from "next/image";

const ItemInfo = ({ item }: { item: IItem }) => {
  return (
    <InfoStyle>
      <Image
        src={item?.img}
        alt={item?.name}
        className="detail-item-img"
        width={100}
        height={100}
      />
      <h1>{item?.name}</h1>
      <div className="feature">
        <div className="left">
          <h2>기본 정보</h2>
          <div className="inform">
            {item?.inform.map((a, i) => {
              return <p key={i}>{a}</p>;
            })}
          </div>
        </div>
        <div className="right">
          <h2>세부 정보</h2>
          <div className="inform">
            {item?.detail.map((a, i) => {
              return <p key={i}>{a}</p>;
            })}
          </div>
        </div>
      </div>
    </InfoStyle>
  );
};

export default ItemInfo;
