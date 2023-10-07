import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./mauno/login.tsx";
import Register from "./mauno/register.tsx";
import ProjectPage from "./ProjectPage.tsx";
import NavBar from "./marco/navbar/navbar.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "project/:id",
    element: <ProjectPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />

  </React.StrictMode>
);
