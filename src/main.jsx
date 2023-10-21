import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Main layout/Root";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import AddProduct from "./Pages/Add Product/AddProduct";
import Details from "./Components/Details/Details";
import MyCart from "./Pages/My Cart/MyCart";
import Update from "./Components/Update/Update";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Auth Provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Private Route/PrivateRoute";
import Error from "./Components/ErrorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/products/:name',
        element: <Products></Products>,
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute> 
      },
      {
        path: '/details/:id',
        element: <PrivateRoute> <Details></Details> </PrivateRoute>
      },
      {
        path: '/myCart',
        element: <PrivateRoute> <MyCart></MyCart> </PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute> <Update></Update> </PrivateRoute>,
        loader: ({params}) => fetch(`https://fusion-hub-server.vercel.app/brandProductss/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <Toaster/>
    </AuthProvider>
  </React.StrictMode>
);
