import React from "react";
import { useRecoilValue } from "recoil";

import { todoListState } from "~/recoil/atoms";

import { TodoItemCreator, TodoItem } from "~/components";

export const TodoList = () => {
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
