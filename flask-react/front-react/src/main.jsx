import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
//import Users from "./routes/Users";
import ErrorPage from "./error-page";
import  Users from "./components/users/Users";
import Navbar from "./components/Navbar";
import 'bootswatch/dist/darkly/bootstrap.min.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:5000';
//axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use(request => {
  console.log(request);
  // Edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <Users/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);