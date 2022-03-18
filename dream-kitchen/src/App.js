import "./App.css";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import Section from "./components/Section";
import "./components/Section.css";
import Benefits from "./components/benefits";
import "./components/benefits.css";
import Products from "./components/products";
import "./components/products.css";

function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <Benefits />
      <Products />
    </div>
  );
}

export default App;
