import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import axios from "axios";

import { filteredTodoListState } from "../recoil/selectors";
import { todoListState } from "../recoil/atoms";

import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";
import { TodoListFilters } from "./TodoListFilters";
import { TodoListStats } from "./TodoListStats";

export const TodoList = () => {
  // todoListStateの値をuseRecoilValueでコンポーネントに読み込む
  // const todoList = useRecoilValue(todoListState);
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
