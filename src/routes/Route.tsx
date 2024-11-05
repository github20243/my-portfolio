import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Notfound from "../pages/Notfound";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import BlogsPage from "../pages/BlogsPage";
import PageTransition from "../components/PageTransition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "about",
        element: (
          <PageTransition>
            <About />
          </PageTransition>
        ),
      },
      {
        path: "projects",
        element: (
          <PageTransition>
            <Projects />
          </PageTransition>
        ),
      },
      {
        path: "resume",
        element: (
          <PageTransition>
            <Resume />
          </PageTransition>
        ),
      },
      {
        path: "blogs",
        element: (
          <PageTransition>
            <BlogsPage />
          </PageTransition>
        ),
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
