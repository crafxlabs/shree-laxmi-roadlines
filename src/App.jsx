import { useState } from 'react';
import './App.css';
import Preloader from './Preloader';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home.jsx"
import About from "./About.jsx"
import Services from "./Services.jsx"
import Gallery from "./Gallery.jsx"
import Fleet from "./Fleet.jsx"
import Office from "./Office.jsx"
import Contact from "./Contact.jsx"
import Footer from './Footer';

function App() {


  const [loading, setLoading] = useState(true);


  setTimeout(() => {
    setLoading(false)
  }, 1000)

  if (loading) {
    return <Preloader />
  }

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/office" element={<Office />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>



    </div>
  );
}

export default App;
