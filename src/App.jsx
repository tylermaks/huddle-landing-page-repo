import React from "react"
import './Assets/Styles/App.scss';

import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

function App() {
  return (
    <main className="App">
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}

export default App;
