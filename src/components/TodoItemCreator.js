import React, { useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms";

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  // todoListStateのsetter関数を代入
  const setTodoList = useSetRecoilState(todoListState);

  // todoListStateに新しいitemを追加する
  const addItem = async () => {
    await axios
      .post("http://localhost:3030/reference", {
        text: inputValue,
        isComplete: false,
      })
      .then((res) => {
        // useSetRecoilStateで宣言したsetter関数
        // 第一引数はstate
        const todoListInMongoDB = res.data;
        setTodoList(todoListInMongoDB);
      });

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
