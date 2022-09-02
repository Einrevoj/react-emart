import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
