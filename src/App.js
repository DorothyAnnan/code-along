import Header from "./components/Header";
import Button from "./components/Button";
import{ Image } from "./components/Image";
import Navbar from "./components/Navbar";


function App() {
return (
<div>
  <Header />
  <Navbar />
  <Button label="Add to Cart" />
  <Button label="Home" />
  <Button label="Register" />
  <Button label="Contact" />
  <Button label="Login" />
  <Button label="Read more..." />

  <Image />
</div>
);
};

export default App;



