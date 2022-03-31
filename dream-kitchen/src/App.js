import "./App.css";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import Section from "./components/Section";
import "./components/Section.css";
import Benefits from "./components/Benefits";
import "./components/Benefits.css";
import Products from "./components/Products";
import "./components/Products.css";
import ItemListContainer from "./components/ItemListContainer";
import "./components/ItemListContainer.css";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <Benefits />
      <Products />
      <ItemListContainer />
      <ItemDetailContainer id={5} />
    </div>
  );
}

export default App;
