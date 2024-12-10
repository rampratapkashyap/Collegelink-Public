import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CustomThemeProvider } from './Components/ThemeContext'; // Correct the import to match export
import Topnav from './Components/Topnav';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <CustomThemeProvider> {/* Wrap the app with CustomThemeProvider */}
      <Topnav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </CustomThemeProvider>
  );
};

export default App;
