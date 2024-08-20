import {Outlet} from "react-router-dom";
import {Container, CssBaseline} from "@mui/material";

function App() {

  return (
    <>
      <CssBaseline/>
      <Container maxWidth="lg">
        <main>
          <Outlet/>
        </main>
      </Container>
    </>
  )
}

export default App
