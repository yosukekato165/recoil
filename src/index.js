import * as React from "react";
import * as ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import { TodoList } from "./components/TodoList";

ReactDOM.render(
  <>
    {/* Context APIと同じでProviderを設定 */}
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  </>,
  document.getElementById("root")
);
