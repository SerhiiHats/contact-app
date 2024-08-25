import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ContactsList from "./pages/ContactsList/ContactsList.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import {Provider} from "react-redux";
import store from "./redux/store.js";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: '#EDEDED',
    },
    secondary: {
      main: '#A6A6A6',
    },
    text: {
      primary: '#000000',
      secondary: '#AAAAAA',
    }
  }
});


const AppEntrypoint = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App/>
    </ThemeProvider>
  </Provider>
)


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
