import { useDispatch } from "react-redux";
import { elnathFilter, victoriaFilter } from "../../store/monsterSlice";
import { ButtonsStyle } from "../item/style";
import Button from "../common/button";

const MonsterLocationButtons = () => {
  const dispatch = useDispatch();
  const buttons = [elnathFilter, victoriaFilter];
  const continents = ["엘나스 산맥", "빅토리아 아일랜드"];
  return (
    <ButtonsStyle>
      <h2>지역별 필터</h2>
      <div className="btns active">
        {buttons.map((btn, idx) => {
          return (
            <Button className="btn" key={idx} onClick={() => dispatch(btn())}>
              {continents[idx]}
            </Button>
          );
        })}
      </div>
    </ButtonsStyle>
  );
};

export default MonsterLocationButtons;
