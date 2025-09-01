import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./features/hero/HeroSection";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar/>
      <HeroSection/>
    </div>
  );
}

export default App;
