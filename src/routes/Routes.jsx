import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/home/Home";
import Featureds from "../components/featureds/Featureds";
import Shop from "../components/shop/Shop";
import Aboutus from "../components/aboutus/Aboutus";
import Contact from "../components/contact/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/> ,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/featureds',
          element: <Featureds />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: '/aboutus',
          element: <Aboutus />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
      ]
    },
  ]);