import { CardStyle } from "./style";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IItem } from "@/app/model/item.model";

interface Props {
  item: IItem;
  idx: number;
}

const ItemCard = ({ item, idx }: Props) => {
  const router = useRouter();
  let details: string[] = [];

  if (item.inform.includes("방어구") || item.inform.includes("분류 무기")) {
    if (
      item.inform.includes("분류 무기") &&
      item.detail.includes("직업 마법사")
    ) {
      details = [item.inform[0], item.detail[0], item.detail[3]];
    } else {
      details = [item.inform[0], item.detail[0], item.detail[2]];
    }
  } else if (item.inform.includes("장신구")) {
    details = [item.inform[0], item.detail[0]];
  } else {
    details = [item.inform[1]];
  }
  return (
    <CardStyle
      key={idx}
      onClick={() => {
        router.push(`/item/${item.id}`);
      }}
    >
      <Image
        src={item.img}
        alt={item.name}
        className="item-card-img"
        loading="lazy"
        width={200}
        height={200}
      />
      <p>{item.name}</p>
      {details.map((detail, idx) => (
        <p key={idx}>{detail}</p>
      ))}
    </CardStyle>
  );
};

export default ItemCard;
