import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms";

// utility for creating unique Id
let id = 0;
const getId = () => {
  return id++;
};

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  // todoListStateのsetter関数を代入
  const setTodoList = useSetRecoilState(todoListState);

  // todoListStateに新しいitemを追加する
  const addItem = () => {
    // useSetRecoilStateで宣言したsetter関数
    // 第一引数はstate
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </>
  );
};
