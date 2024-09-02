import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Provider} from "react-redux";
import store from "./redux/store.js";
import App from "./App.jsx";


const theme = createTheme({
  palette: {
    primary: {
      main: '#EDEDED',
    },
    secondary: {
      main: '#A6A6A6',
    },
    third: {
      main: '#000000',
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

export default AppEntrypoint;