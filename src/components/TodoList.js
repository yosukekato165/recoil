import React from "react";
import { useRecoilValue } from "recoil";

// import { todoListState } from "../recoil/atoms";
import { filteredTodoListState } from "../recoil/selectors";

import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";
import { TodoListFilters } from "./TodoListFilters";
import { TodoListStats } from "./TodoListStats";

export const TodoList = () => {
  // todoListStateの値をuseRecoilValueでコンポーネントに読み込む
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => {
        return <TodoItem key={todoItem._id} item={todoItem} />;
      })}
    </>
  );
};
