import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:i" element={<Cards />} />
      </Routes>
    </>
  );
}

export default App;
