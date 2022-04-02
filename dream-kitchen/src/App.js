import "./App.css";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Home";
import Shop from "./components/pages/Shop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
