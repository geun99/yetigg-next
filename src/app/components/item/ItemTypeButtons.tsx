import {
  accFilter,
  armorFilter,
  craftFilter,
  elixirFilter,
  othersFilter,
  scrollFilter,
  throwsFilter,
  weaponFilter,
} from "../../store/itemSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ButtonsStyle } from "./style";
import Button from "../common/button";

const ItemTypeButtons = () => {
  const dispatch = useDispatch();
  const [isTypeActive, setIsTypeActive] = useState(false);
  const buttons = [
    weaponFilter,
    armorFilter,
    accFilter,
    othersFilter,
    craftFilter,
    elixirFilter,
    scrollFilter,
    throwsFilter,
  ];
  const types = [
    "무기",
    "방어구",
    "장신구",
    "기타",
    "제작",
    "포션",
    "주문서",
    "표창/화살",
  ];
  const toggleTypeButtons = () => {
    setIsTypeActive(!isTypeActive);
  };
  return (
    <ButtonsStyle>
      <p onClick={toggleTypeButtons}>종류별 장비 분류</p>
      <div className={`btns type ${isTypeActive ? "active" : ""}`}>
        {buttons.map((btn, idx) => {
          return (
            <Button className="btn" key={idx} onClick={() => dispatch(btn())}>
              {types[idx]}
            </Button>
          );
        })}
      </div>
    </ButtonsStyle>
  );
};

export default ItemTypeButtons;
