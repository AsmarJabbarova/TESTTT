import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import Add from './pages/Add/Add.jsx'
import Wish from './pages/Wish/Wish.jsx'
import Detail from './pages/Detail/Detail.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "add",
        element: <Add/>,
      },
      {
        path: "wish",
        element: <Wish/>,
      },
      {
        path: "/detail/:productsId",
        element: <Detail/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
