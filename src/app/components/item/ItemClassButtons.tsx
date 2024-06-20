import { useDispatch } from "react-redux";
import {
  archerFilter,
  communalFilter,
  magicianFilter,
  rogueFilter,
  warriorFilter,
} from "../../store/itemSlice";
import { useState } from "react";
import { ButtonsStyle } from "./style";
import Button from "../common/button";

const ItemClassButtons = () => {
  const dispatch = useDispatch();
  const [isJobActive, setIsJobActive] = useState(false);
  const buttons = [
    warriorFilter,
    archerFilter,
    rogueFilter,
    magicianFilter,
    communalFilter,
  ];
  const jobs = ["전사", "궁수", "도적", "마법사", "공용"];
  const toggleJobButtons = () => setIsJobActive(!isJobActive);

  return (
    <ButtonsStyle>
      <p onClick={toggleJobButtons} className="item-p">
        직업별 장비 분류
      </p>
      <div className={`btns job ${isJobActive ? "active" : ""}`}>
        {buttons.map((btn, idx) => {
          return (
            <Button className="btn" key={idx} onClick={() => dispatch(btn())}>
              {jobs[idx]}
            </Button>
          );
        })}
      </div>
    </ButtonsStyle>
  );
};

export default ItemClassButtons;
