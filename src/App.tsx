import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./features/hero/HeroSection";
import ProductsCarousel from "./features/products/ProductsCarousel";



function App() {
  return (
    <div className="w-full h-full">
      <Navbar/>
      <HeroSection/>
      <ProductsCarousel/>
    </div>
  );
}

export default App;
