import { createBrowserRouter } from "react-router-dom";
import { routes } from "~/routes";
import { RootLayout, MainLayout, NotFoundLayout } from "~/ui/layouts";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: routes,
      },
      {
        path: "*",
        element: <NotFoundLayout />,
      },
    ],
  },
]);
