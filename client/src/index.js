import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/ReduxStore"; // Import your Redux store
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
