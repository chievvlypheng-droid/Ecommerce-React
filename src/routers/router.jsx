import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../pages/Productdetail";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/loginPage";
// import ProfilePage from "../pages/profilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetail />,
  },
  {
    path: "/loginPage",
    element: <LoginPage />,
  },
  // {
  //   path: "/ProfilePage",
  //   element: <ProfilePage />,
  // },
]);

export default router;
