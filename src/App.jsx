import './App.css';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import About from './components/About';
// <-- Don't forget to import Services
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MeetUs from './components/MeetUs';
import Service from './components/Service';
import ContactPage from './components/ContactPage';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <Router>
      
      <Navbar />
      
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
         <Route path="/meet-us" element={<MeetUs />} />
         <Route path="/portfolio" element={<Portfolio />} />
         <Route path="/contact" element={<ContactPage />} />
       
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
