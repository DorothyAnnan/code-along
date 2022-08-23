// import Form from"./components/Form"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";

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
    <Route path="/contact" element={<Contact/>}/>
    
  </Routes>
</BrowserRouter>
</div>
);
};

export default App;



