import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import {store} from './services/store';

ReactDOMClient.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
    );

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
