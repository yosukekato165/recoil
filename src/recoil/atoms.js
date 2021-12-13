import { atom } from "recoil";

// todoListStateの初期値
export const todoListState = atom({
  key: "todoListState",
  default: [],
});
