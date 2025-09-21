import "./App.css";
import Navbar from "./components/navbar/Navbar";
import WhyChooseFuory from "./features/whyFuory/WhyChooseFuory";
import HeroSection from "./features/hero/HeroSection";
import ProductsCarousel from "./features/products/ProductsCarousel";
import IQF_Section from "./features/iqfSection/IqfSection";

import CounterSection from "./features/counter/Counter";
import Footer from "./components/footer/Footer";
import ContactUs from "./features/contant-us/ContactUs";
import AgriculturalShowcase from "./features/varity";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <HeroSection />
      <AgriculturalShowcase/>
      <ProductsCarousel />
      <IQF_Section />
      <CounterSection/>
      <WhyChooseFuory />
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
