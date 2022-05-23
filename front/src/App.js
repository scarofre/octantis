import "./App.css";
import NavBar from "./components/NavBar";
import RouterOctantis from "./components/RouterOctantis";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
