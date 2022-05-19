import "./App.css";
import NavBar from "./components/NavBar";
import RouterOctantis from "./components/RouterOctantis";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RouterOctantis />
      </BrowserRouter>
    </div>
  );
}

export default App;
