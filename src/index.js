import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import './index.css';
import App from './App';
import Body from './Component/Body';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Component/Login';
import About from './Component/About';
import Contact from './Component/Contact';
import Details from './Component/Details';


const appRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path : "/details",
        element : <Details />,
      },
      {
        path :"/contact",
        element:<Contact />,
      },
      
      
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);



