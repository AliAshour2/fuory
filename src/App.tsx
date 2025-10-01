import { Helmet } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import WhyChooseFuory from "./features/whyFuory/WhyChooseFuory";
import HeroSection from "./features/hero/HeroSection";
import ProductsCarousel from "./features/products/ProductsCarousel";
import IQF_Section from "./features/iqfSection/IqfSection";
import CounterSection from "./features/counter/Counter";
import Footer from "./components/footer/Footer";
import ContactUs from "./features/contact-us/ContactUs";
import AgriculturalShowcase from "./features/varity";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-full h-full">
      <Helmet>
        <title>Fuory - Fresh & Frozen Fruits and Vegetables</title>
        <meta
          name="description"
          content="Fuory is a leading supplier of high-quality fresh and frozen fruits and vegetables, sourced from the best farms in Egypt."
        />
      </Helmet>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home">
                <HeroSection />
              </div>
              <div id="products">
                <AgriculturalShowcase />
              </div>
              <div id="frozen">
                <ProductsCarousel />
              </div>
              <IQF_Section />
              <CounterSection />
              <WhyChooseFuory />
              <div id="contact">
                <ContactUs />
              </div>
            </>
          }
        />
        <Route path="/products" element={<ProductCategoryPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
