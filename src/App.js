import React, { useEffect, useState } from "react";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home.jsx";
import Work from "./components/Work.jsx";
import TimeLine from "./components/TimeLine.jsx";
import Services from "./components/Services.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/app.scss";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };
    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);

  return ratio < 2 ? (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio}/>
      <Work />
      <TimeLine />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) : (
    <em id="customMessage"> Please Change the ratio to View!</em>
  );
};

export default App;
