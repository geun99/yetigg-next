import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../model/item.model";

let originItem: IItem[] = [];

let items = createSlice({
  name: "item",
  initialState: [] as IItem[],
  reducers: {
    initItem(state, action: PayloadAction<IItem[]>) {
      originItem = [...action.payload];
      return action.payload;
    },
    weaponFilter(state) {
      let copy = [...originItem];
      copy = copy.filter((i) => i.inform.includes("분류 무기"));
      return copy;
    },
    accFilter(state) {
      let copy = [...originItem];
      copy = copy.filter((i) => i.inform.includes("장신구"));
      return copy;
    },
    armorFilter(state) {
      let copy = [...originItem];
      copy = copy.filter((i) => i.inform.includes("방어구"));
      return copy;
    },
    craftFilter(state) {
      let copy = [...originItem];
      copy = copy.filter((i) => i.inform.includes("제작"));
      return copy;
    },
    othersFilter(state) {
      let copy = [...originItem];
      copy = copy.filter((i) => i.inform.includes("기타"));
      return copy;
    },
    throwsFilter(state) {
      let copy = [...originItem];
      copy = copy.filter((i) => i.inform.includes("발사체"));
      return copy;
    },
    scrollFilter(state) {
      let copy = [...originItem];
      copy = copy.filter(
        (i) =>
          i.inform.includes("무기 주문서") || i.inform.includes("방어구 주문서")
      );
      return copy;
    },
    elixirFilter(state) {
      let copy = [...originItem];
      copy = copy.filter((i) => i.inform.includes("소비"));
      return copy;
    },
    archerFilter(state) {
      let copy = [...originItem];
      copy = copy.filter((i) => i.detail.includes("직업 궁수"));
      return copy;
    },
    rogueFilter(state) {
      let copy = [...originItem];
      copy = copy.filter((i) => i.detail.includes("직업 도적"));
      return copy;
    },
    magicianFilter(state) {
      let copy = [...originItem];
      copy = copy.filter((i) => i.detail.includes("직업 마법사"));
      return copy;
    },
    warriorFilter(state) {
      let copy = [...originItem];
      copy = copy.filter((i) => i.detail.includes("직업 전사"));
      return copy;
    },
    communalFilter(state) {
      let copy = [...originItem];
      copy = copy.filter((i) => i.detail.includes("직업 공용"));
      return copy;
    },
  },
});

export let {
  initItem,
  weaponFilter,
  accFilter,
  armorFilter,
  craftFilter,
  othersFilter,
  throwsFilter,
  scrollFilter,
  elixirFilter,
  archerFilter,
  rogueFilter,
  magicianFilter,
  warriorFilter,
  communalFilter,
} = items.actions;

export default items;
