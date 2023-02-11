import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Privacy from './pages/Privacy.jsx';
import Security from './pages/Security.jsx';
import Basic from './pages/Basic.jsx';
import Properties from './pages/Properties.jsx';
import Navbar from './components/Navbar';
import NavbarM from './components/Navbar/indexM'
import Footer from './components/Footer/Footer';
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter><Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/about" element={<NavbarM/>} />
        <Route path="/login" element={<NavbarM/>} />
        <Route path="/register" element={<NavbarM/>} />
        <Route path="/security" element={<NavbarM/>} />
        <Route path="/privacy" element={<NavbarM />} />
          <Route path="/basic" element={<NavbarM />} />
          <Route path="/properties" element={<NavbarM />} />
        </Routes>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>} exact/>
          <Route path="/about" element={<About />}  />
          <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
          <Route path="/security" element={<Security />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
      </Sidebar>
      <Footer/>
    </BrowserRouter>
    
  );
};

export default App;