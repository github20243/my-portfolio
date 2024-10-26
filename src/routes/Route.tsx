import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Notfound from "../pages/Notfound";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import BlogsPage from "../pages/BlogsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,  // BaseLayout здесь, не передаем children вручную
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects/>
      },
      {
        path: "resume",
        element: <Resume/>
      },
      {
        path: "blogs",
        element: <BlogsPage/>
      },
      {
        path: "*",
        element: <Notfound/>
      }
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
