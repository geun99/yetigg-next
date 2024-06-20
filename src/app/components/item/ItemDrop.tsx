import { useDispatch, useSelector } from "react-redux";
import { IItem } from "@/app/model/item.model";
import { stateType } from "@/app/monster/page";
import Link from "next/link";
import Image from "next/image";
import { DropStyle, FewDropStyle } from "./style";
import { useEffect } from "react";
import { initMonster } from "@/app/store/monsterSlice";

const ItemDrop = ({ item }: { item: IItem }) => {
  let monster = useSelector((state: stateType) => {
    return state.monster;
  });

  const dispatch = useDispatch();
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

  if (item.drop.length < 5) {
    return (
      <FewDropStyle>
        <h2>드랍</h2>
        <div className="detail-drop">
          {item.drop.map((itemName, index) => {
            let monsterFound = monster.find((item) => item.name === itemName);

            if (monsterFound) {
              return (
                <Link
                  href={`/monster/${monsterFound.id}`}
                  className="link"
                  key={index}
                >
                  <div className="box">
                    <Image
                      src={monsterFound.img}
                      alt={itemName}
                      width={100}
                      height={100}
                    />
                    <p>{itemName}</p>
                  </div>
                </Link>
              );
            } else {
              return (
                <div key={index}>
                  <p>{itemName}</p>
                </div>
              );
            }
          })}
        </div>
      </FewDropStyle>
    );
  }
  return (
    <DropStyle>
      <h2>드랍</h2>
      <div className="detail-drop">
        {item.drop.map((itemName, index) => {
          let monsterFound = monster.find((item) => item.name === itemName);

          if (monsterFound) {
            return (
              <Link
                href={`/monster/${monsterFound.id}`}
                className="link"
                key={index}
              >
                <div className="box">
                  <Image
                    src={monsterFound.img}
                    alt={itemName}
                    width={100}
                    height={100}
                  />
                  <p>{itemName}</p>
                </div>
              </Link>
            );
          } else {
            return (
              <div key={index}>
                <p>{itemName}</p>
              </div>
            );
          }
        })}
      </div>
    </DropStyle>
  );
};

export default ItemDrop;
