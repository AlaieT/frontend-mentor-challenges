import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import Home from "./page/home";

import "./styles/global.scss";

const App = ({ startUrl }:{ startUrl : string }) => {
    if (typeof window !== 'undefined') {
        const router = createBrowserRouter(
            createRoutesFromElements(<Route path={`${startUrl}/*`} element={<Home />} />)
          );
        return <RouterProvider router={router} />
    }

    return null
};

export default App;
