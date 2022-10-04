import Header from "./components/header/Header";
import Product from "./components/productPage/Product";
import Content from "./components/contentPage/Content";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/content" element={<Content/>} />
        <Route path="/" element={<Product/>} />
      </Routes>
    </div>
    );
}

export default App;
