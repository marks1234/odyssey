import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ProjectPage from "./ProjectPage.tsx";
import { ThemeProvider, useTheme } from "./ThemeContext.tsx";
import NavBar from "./marco/navbar/navbar.tsx";
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
    path: "userpage",
    element: <Userpage />
  },
  {
    path: "project/:id",
    element: <ProjectPage />,
  },
]);

function useThemeUpdate() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (root) {
      root.setAttribute("data-bs-theme", theme);
    }
  }, [theme]);
}

function Main() {
  useThemeUpdate();
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  </React.StrictMode>
);
