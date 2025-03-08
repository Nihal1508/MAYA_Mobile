import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout";
import PhotoGallery from "../pages/Gallery";
import LandingPage from "../pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "gallery", element: <PhotoGallery /> },
    ],
  },
]);

export default router;
