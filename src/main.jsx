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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/products/:name',
        element: <Products></Products>
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/details/:id',
        element: <Details></Details>
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/brandProducts/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
