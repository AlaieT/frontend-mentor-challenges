import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import Home from "./page/home";

import "./styles/global.scss";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={<Home />} />)
);

const App = () => <RouterProvider router={router} />;

export default App;
