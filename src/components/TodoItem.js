import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";

import { todoListState } from "../recoil/atoms";

const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = async (id) => {
    console.log(id);
    await axios.request({
      method: "delete",
      url: "http://localhost:3030/delete",
      data: { _id: id },
    });

    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "300px",
        marginBottom: "30px",
        padding: "10px",
        border: "solid 1px #333",
      }}
    >
      <p
        style={{
          display: "inline-block",
          width: "100px",
        }}
      >
        {item.text}
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={item.isComplete}
          onChange={toggleItemCompletion}
        />
        <button onClick={() => deleteItem(item._id)}>x</button>
      </div>
    </div>
  );
};
