
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { useState } from "react";
import CartContextProvider from "./context/cart";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";


function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
 

  return (
    <div>
   
      <Provider store={store}>
        <CartContextProvider>
          <Header
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            title='ECommerce'
          />
          <ProductList selectedCategory={selectedCategory} />
        </CartContextProvider>
      </Provider>
     
      <Footer/>
      <ScrollToTopButton/>

    </div>

    
  );


}



export default App;