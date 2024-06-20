import { configureStore } from "@reduxjs/toolkit";
import items from "./itemSlice";
import monsters from "./monsterSlice";

export default configureStore({
  reducer: {
    item: items.reducer,
    monster: monsters.reducer,
  },
});
