import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-phantom-purple-bg">
      <Header />
      <Hero />
      <MainContent />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;