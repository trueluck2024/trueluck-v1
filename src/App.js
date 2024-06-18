import './App.css';
import { useState } from 'react';
import Home from "./Pages/HomePage";
import ProfileDashboard from "./Pages/ProfileDashboard";
import LandingPage from './Pages/LandingPage';
import ExpandedRoomPage from "./Pages/ExpandedRoomPage";
import AnimatedParticles from "./Components/Particles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from "./Components/test";


function App() {
  const [disclaimerPopup,setDisclaimerPopup] = useState(true);
  
  const hideDisclaimer = () =>{
    setDisclaimerPopup(false);
  }
 
  return (
    <div className="App">
      {/* <Test/> */}
      <div className="particles-background">
        <AnimatedParticles />
      </div>
       <Router basename="/true-luck">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/Home" element={<Home disclaimerPopup={disclaimerPopup} hideDisclaimer={hideDisclaimer} />} />
          <Route path="/ProfileDashboard" element={<ProfileDashboard />} />
          <Route path="/Room" element={<ExpandedRoomPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
