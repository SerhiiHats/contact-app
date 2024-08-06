import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ContactsListPage from "./pages/ContactsListPage/ContactsListPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <ContactsListPage/>,
      },
      {
        path: "/contact/:id",
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
