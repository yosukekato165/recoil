import React from "react";
import { useRecoilValue } from "recoil";

import { filteredTodoListState } from "../recoil/selectors";

import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";
import { TodoListFilters } from "./TodoListFilters";
import { TodoListStats } from "./TodoListStats";

export const TodoList = () => {
  // todoListStateの値をuseRecoilValueでコンポーネントに読み込む
  const filteredTodoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodoList.map((todoItem) => {
        return <TodoItem key={todoItem._id} item={todoItem} />;
      })}
    </>
  );
};
