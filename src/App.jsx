// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer';


import './App.css';
import ProductCard from './components/ProductCard';
import Action from './components/Action';
import Team from "./components/Team";
import Reviews from './components/Reviews';
import Clients from './components/Clients';
import MyComponent from './components/MyCoponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          At Namrata Universal, we deliver with a focus on quality, integrity, and long-term relationships. 
          We have experienced professionals who understand that IT services are evolving, and we are true 
          partners who care about your success.
        </p>
      </div>
      {/* <div><img src="/hero-image.jpg" alt="Logo" /></div> */}
      <MyComponent/>
      <WelcomeSection />
      <div className="about-us">
      <h1>Services</h1>
      <p>Nationwide Service, Local Expertise Offer The Latest Software And Solutions To Our Customers!</p>
      </div>
     

      <div className='service'>
        
      <ProductCard/>
      
        </div>
        <Action/>
        <Team/>
        <Reviews/>
        <Clients/>
      <Footer />
    </div>
  );
}

export default App;
