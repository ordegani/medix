import React from "react";
import Navbar from "./NavBar";
import Home from "./Home";
import Header from "./Header";
import Hero from "./Hero";
import MiddleSection from "./MiddleSection";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>

      <Header />
      <Navbar />
      <Hero />
      <MiddleSection />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/' exact element={<Home />} />
        <Route path='/' exact element={<Home />} />
        <Route path='/' exact element={<Home />} />
        <Route path='/' exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
