"use client";

import ItemDrop from "@/app/components/item/ItemDrop";
import ItemInfo from "@/app/components/item/ItemInfo";
import { DetailStyle } from "@/app/components/monster/style";
import { IItem } from "@/app/model/item.model";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ItemDetail = () => {
  const { id } = useParams<{ id: string }>() || { id: "" };
  const [item, setItem] = useState<IItem | null>(null);

  useEffect(() => {
    const fetchMonster = async () => {
      try {
        if (!id) {
          throw new Error("Monster ID not provided");
        }
        const response = await fetch(`/api/item/getItemDetail?id=${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch item: ${response.status}`);
        }
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchMonster();
  }, [id]);

  if (!item) {
    return <div>아이템이 존재하지 않습니다.</div>;
  }
  return (
    <DetailStyle>
      <ItemInfo item={item} />
      <ItemDrop item={item} />
    </DetailStyle>
  );
};

export default ItemDetail;
