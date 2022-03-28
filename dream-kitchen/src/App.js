import "./App.css";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import Section from "./components/Section";
import "./components/Section.css";
import Benefits from "./components/Benefits";
import "./components/Benefits.css";
import Products from "./components/Products";
import "./components/Products.css";
import ItemListCont from "./components/ItemListContainer";
import "./components/ItemListContainer.css";

function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <Benefits />
      <Products />
      <ItemListCont />
    </div>
  );
}

export default App;
