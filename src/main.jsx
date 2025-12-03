import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App.jsx";
import Forside from "./views/forside/Forside";
import OmOs from "./views/omos/OmOs";
import Projekter from "./views/projekter/Projekter.jsx";

import Booking from "./views/booking/Booking";

import Kontakt from "./views/kontakt/Kontakt";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Forside />,
      },
      {
        path: '/om-os',
        element: <OmOs />,
      },
       {
        path: '/projekter',
        element: <Projekter />,
      },
   
      {
        path: '/booking',
        element: <Booking />,
      },
      {
        path: '/kontakt',
        element: <Kontakt />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
