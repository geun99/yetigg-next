import { IMonster } from "@/app/model/monster.model";
import { stateType } from "@/app/monster/page";
import { useDispatch, useSelector } from "react-redux";
import { DropStyle, FewDropStyle } from "../item/style";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { initItem } from "@/app/store/itemSlice";

const MonsterDrop = ({ monster }: { monster: IMonster }) => {
  let item = useSelector((state: stateType) => {
    return state.item;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/item/getItems", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(
            `네트워크 응답이 올바르지 않습니다: ${response.status}`
          );
        }
        const data = await response.json();
        dispatch(initItem(data));
      } catch (error) {
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      }
    };
    fetchItems();
  }, [dispatch]);

  if (monster.drop[0] === "없음") {
    return (
      <div className="empty">
        <p>해당 몬스터는 아이템을 드랍하지 않습니다.</p>
      </div>
    );
  }
  if (monster.drop.length < 5) {
    return (
      <FewDropStyle>
        <h2>드랍</h2>
        <div className="drop">
          <div className="detail-drop">
            {monster?.drop.map((itemName, index) => {
              let itemFound = item.find((item) => item.name === itemName);

              if (itemFound) {
                return (
                  <Link
                    href={`/item/${itemFound.id}`}
                    className="link"
                    key={index}
                  >
                    <div className="box">
                      <Image src={itemFound.img} alt={itemName} />
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
        </div>
      </FewDropStyle>
    );
  }
  return (
    <DropStyle>
      <h2>드랍</h2>
      <div className="drop">
        <div className="detail-drop">
          {monster?.drop.map((itemName, index) => {
            let itemFound = item.find((item) => item.name === itemName);
            if (itemFound) {
              return (
                <Link
                  href={`/item/${itemFound.id}`}
                  className="link"
                  key={index}
                >
                  <div className="box">
                    <Image
                      src={itemFound.img}
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
      </div>
    </DropStyle>
  );
};

export default MonsterDrop;
