import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMonster } from "../model/monster.model";

let originMonster: IMonster[] = [];

let monsters = createSlice({
  name: "monster",
  initialState: [] as IMonster[],
  reducers: {
    initMonster(state, action: PayloadAction<IMonster[]>) {
      originMonster = [...action.payload];
      return action.payload;
    },
    lvSort(state) {
      const copy = [...originMonster];
      copy.sort((a, b) => a.level - b.level);
      return copy;
    },
    nameSort(state) {
      const copy = [...originMonster];
      copy.sort((a, b) => a.name.localeCompare(b.name));
      return copy;
    },
    victoriaFilter(state) {
      const copy = [...originMonster];
      let arr: IMonster[] = [];
      copy.forEach((a, i) => {
        if (a.continent === "빅토리아 아일랜드" || a.continent === "둘 다") {
          arr.push(a);
        }
      });
      return arr;
    },

    elnathFilter(state) {
      const copy = [...originMonster];
      let arr: IMonster[] = [];
      copy.forEach((a, i) => {
        if (a.continent === "엘나스 산맥" || a.continent === "둘 다") {
          arr.push(a);
        }
      });
      return arr;
    },
  },
});
export let { initMonster, lvSort, nameSort, victoriaFilter, elnathFilter } =
  monsters.actions;

export default monsters;
