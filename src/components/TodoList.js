import React from "react";
import { useRecoilValue } from "recoil";

import { todoListState } from "../recoil/atoms";

import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  // todoListStateの値をuseRecoilValueでコンポーネントに読み込む
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
