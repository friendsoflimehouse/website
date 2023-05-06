import { createBrowserRouter } from "react-router-dom";

// layouts
import { RootLayout } from "~/ui/layouts";

// pages
import { GetStartedPage, NotFoundPage } from "~/pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <GetStartedPage />,
      },
      {
        path: "*",
        element: <NotFoundPage /> 
      }
    ],
  },
]);
