import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cursor } from './components/Cursor.jsx';
import { Header } from './components/Header.jsx';
import { WebGLCanvas } from './components/WebGLCanvas.jsx';
import { ChaptersNav } from './components/ChaptersNav.jsx';
import { Footer } from './components/Footer.jsx';
import { NavigationHandler } from './components/NavigationHandler.jsx';

import { Home } from './pages/Home.jsx';
import { Development } from './pages/Development.jsx';
import { StateApis } from './pages/StateApis.jsx';
import { Frontend3D } from './pages/Frontend3D.jsx';
import { WebPlatforms } from './pages/WebPlatforms.jsx';
import { Contact } from './pages/Contact.jsx';
import { PrivacyPolicy } from './pages/PrivacyPolicy.jsx';
import { TermsOfUse } from './pages/TermsOfUse.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Header />
      <WebGLCanvas />
      <NavigationHandler />

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Development */}
        <Route path="/development" element={<Development />} />
        <Route path="/development/" element={<Development />} />
        
        {/* State & APIs */}
        <Route path="/state-apis" element={<StateApis />} />
        <Route path="/state-apis/" element={<StateApis />} />
        <Route path="/rag" element={<StateApis />} />
        <Route path="/rag/" element={<StateApis />} />
        
        {/* 3D & Frontend */}
        <Route path="/3d-frontend" element={<Frontend3D />} />
        <Route path="/3d-frontend/" element={<Frontend3D />} />
        <Route path="/agentic-ai" element={<Frontend3D />} />
        <Route path="/agentic-ai/" element={<Frontend3D />} />
        
        {/* Web Platforms */}
        <Route path="/web-platforms" element={<WebPlatforms />} />
        <Route path="/web-platforms/" element={<WebPlatforms />} />
        <Route path="/data-analysis" element={<WebPlatforms />} />
        <Route path="/data-analysis/" element={<WebPlatforms />} />
        
        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/" element={<Contact />} />
        
        {/* Legal */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/terms-of-use/" element={<TermsOfUse />} />
        
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>

      <ChaptersNav />
      <Footer />
    </BrowserRouter>
  );
}
