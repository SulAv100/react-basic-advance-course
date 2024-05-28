import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./Components/Store/Store.jsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>

    <Router>
      <App />
    </Router>
    </Provider>

  </QueryClientProvider>
);
