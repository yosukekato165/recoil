import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import { TodoList } from "./components/TodoList";

ReactDOM.render(
  <>
    {/* Context APIと同じでProviderを設定 */}
    <RecoilRoot>
      <Suspense fallback={<p>loading</p>}>
        <TodoList />
      </Suspense>
    </RecoilRoot>
  </>,
  document.getElementById("root")
);
