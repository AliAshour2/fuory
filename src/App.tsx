import "./App.css";
import Navbar from "./components/navbar/Navbar";
import WhyChooseFuory from "./features/whyFuory/WhyChooseFuory";
import HeroSection from "./features/hero/HeroSection";
import ProductsCarousel from "./features/products/ProductsCarousel";
import IQF_Section from "./features/iqfSection/IqfSection";

import CounterSection from "./features/counter/Counter";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <HeroSection />
      <ProductsCarousel />
      <IQF_Section />
      <CounterSection/>
      <WhyChooseFuory />
      <div className="h-screen w-screen bg-red-300"></div>
    </div>
  );
}

export default App;
