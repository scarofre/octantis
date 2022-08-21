import "./App.css";
import NavBar from "./components/NavBar";
import RouterOctantis from "./components/RouterOctantis";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#121212",
      light:"#2E2E33",
      text:"white"
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#6FCF97',//green
      contrastText: '#ffcc00',//yellow
      light: '#0066ff',
      text:"#666"
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <NavBar />
          <RouterOctantis />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
