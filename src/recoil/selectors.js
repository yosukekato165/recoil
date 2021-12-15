import { selector } from "recoil";
import { todoListState, todoListFilterState } from "./atoms";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    // get() - 他のatom/selectorから値を取得するために使用される関数です。
    // この関数に渡されたすべてのtom/selectorは、暗黙のうちにselectorの依存関係のリストに追加されます。
    // selectorの依存関係のいずれかが変更されると、selectorは再評価されます。
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    // todoListFilterStateとtodoListStateをfilteredTodoListStateに接続して、
    // filterの値によってstoreの値をlistから選別している

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "show Uncompleted":
        return list.filter((item) => !item.isComlete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(filteredTodoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
