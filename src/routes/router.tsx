import { createBrowserRouter } from "react-router-dom";

import App from "../app/App";
import { Home } from "../pages/home";
import { Sobre } from "../pages/sobre";
import { Contato } from "../pages/contato";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
    ],
  },
]);
