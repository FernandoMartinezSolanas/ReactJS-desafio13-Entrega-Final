import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import ItemDetailContainer from "./components/Homepage/ItemDetailContainer";
import Checkout from "./components/pages/Checkout";
import ShopCategory from "./components/pages/ShopCategory";
import { CartProvider } from "./context/cartcontext";
import { WidgetProvider } from "./context/widgetcontext";
import { ModalProvider } from "./context/modalcontext";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <WidgetProvider>
        <ModalProvider>
          <CartProvider>
            <BrowserRouter>
              <ScrollToTop>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Homepage></Homepage>}></Route>
                  <Route path="/shop" element={<Shop></Shop>}></Route>
                  <Route
                    path="/checkout"
                    element={<Checkout></Checkout>}
                  ></Route>
                  <Route
                    path="/:category"
                    element={<ShopCategory></ShopCategory>}
                  ></Route>
                  <Route
                    path="/productos/:id"
                    element={<ItemDetailContainer />}
                  ></Route>
                </Routes>
                <Footer />
              </ScrollToTop>
            </BrowserRouter>
          </CartProvider>
        </ModalProvider>
      </WidgetProvider>
    </div>
  );
}

export default App;
