import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ContactsListPage from "./features/ContactsListPage/ContactsListPage.jsx";
import ContactPage from "./features/ContactPage/ContactPage.jsx";
import Home from "./features/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/contacts",
        element: <ContactsListPage/>,
      },
      {
        path: "/contact",
        element: <ContactPage/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
