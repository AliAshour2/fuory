import "./App.css";
import Navbar from "./components/navbar/Navbar";
import WhyChooseFuory from "./features/whyFuory/WhyChooseFuory";
import HeroSection from "./features/hero/HeroSection";
import ProductsCarousel from "./features/products/ProductsCarousel";
import IQF_Section from "./features/iqfSection/IqfSection";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <HeroSection />
      <ProductsCarousel />
      <IQF_Section />
      <Counter/>
      <WhyChooseFuory />
    </div>
  );
}

export default App;
