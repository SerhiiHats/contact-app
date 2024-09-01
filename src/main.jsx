import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ContactsList from "./pages/ContactsList/ContactsList.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import AppEntrypoint from "./AppEntrypoint.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppEntrypoint/>,
    children: [
      {
        path: "/",
        element: <ContactsList/>,
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
