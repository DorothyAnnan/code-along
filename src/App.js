// import Form from"./components/Form"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar";
import TaskManager from "./pages/TaskManager";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

// import Spinner from "./components/Spinner";
// import Header from "./components/Header";
// import Button from "./components/Button";
// import{ Image } from "./components/Image";

// import Practice from "./components/Practice";
 



function App() {
return (
<div>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
    <Route path="/task-manager" element={<TaskManager/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/products" element={<ProductList/>}/>
    <Route path="/products/:productId" element={<ProductDetail/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/*" element={<NotFound/>}/>
  </Routes>
</BrowserRouter>
</div>
);
};

export default App;



