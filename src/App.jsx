import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/banner/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import More from "./pages/More";
import { useState } from "react";
import Contact from "./contacts/Contact";
import Footer from "./footer/Footer";
function App() {
  const [showMore, setShowMore] = useState(false);

  const handleNavigation = () => {
    setShowMore(true);
  };
  const handleBack = () => {
    setShowMore(false);
  };
  return (
    <div className="w-full h-auto bg-gray-900 text-lightText">
      <div className="max-w-screen-xl mx-auto ">
        <Navbar />
        <Home />
        {showMore ? (
          <More onBack={handleBack} />
        ) : (
          <About onNavigate={handleNavigation} />
        )}
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
