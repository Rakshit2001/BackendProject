import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Announcements from "./Components/Announcements";
import Navbar from "./Components/Navbar";
import { Routes,BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return <>
          <Announcements/>
  {/* <Home>
  </Home> */}
  {/* <Register></Register> */}
  {/* <ProductList/> */}
  {/* <Product/> */}
  {/* <Login/> */}
  {/* <Cart/> */}
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="home" element={<Home></Home>}></Route>
    <Route path="/register" element={<Register></Register>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/cart" element={<Cart></Cart>}></Route>
    <Route path="/productlist" element={<ProductList></ProductList>}></Route>
    <Route path="/product" element={<Product></Product>}></Route>
  </Routes>
  </BrowserRouter>
  </>
};

export default App;