import './App.css';
import { useState } from 'react';
import Home from "./Pages/HomePage";
import ProfileDashboard from "./Pages/ProfileDashboard";
import LandingPage from './Pages/LandingPage';
import ExpandedRoomPage from "./Pages/ExpandedRoomPage";
import AnimatedParticles from "./Components/Particles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from "./Pages/Admin Dashboard";
import AdminPopup from "./Pages/Admin Popup";
import AdminPL from "./Pages/Admin PL";
import AdminTransaction from "./Pages/Admin Transaction";
import AdminReferral from "./Pages/Admin Referal";
import Wallet from './Components/Wallet';
import AdminRoom from './Components/Admin Room Main';
import AdminCreateRoom from './Components/Admin Create Room';
import AdminUserPage from './Pages/Admin User Page';


function App() {
  const [disclaimerPopup,setDisclaimerPopup] = useState(true);
  
  const hideDisclaimer = () =>{
    setDisclaimerPopup(false);
  }
 
  return (
    <div className="App">
     
      {/* <div className="particles-background">
        <AnimatedParticles />
      </div> */}
       <Router basename="/true-luck">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/Home" element={<Home disclaimerPopup={disclaimerPopup} hideDisclaimer={hideDisclaimer} />} />
          <Route path="/ProfileDashboard" element={<ProfileDashboard />} />
          <Route path="/Admin" element={ <AdminDashboard/>} />
          <Route path="/Popup" element={ <AdminPopup/>} />
          <Route path="/Room" element={ <ExpandedRoomPage/>} />
          <Route path="/PL" element={ <AdminPL/>} />
          <Route path="/Wallet" element={ <Wallet/>} />
          <Route path="/Transaction" element={ <AdminTransaction/>} />
          <Route path="/Referral" element={ <AdminReferral/>} />
          <Route path="/AdminRoom" element={ <AdminRoom/>} />
          <Route path="/CreateRoom" element={ <AdminCreateRoom/>} />
          <Route path="/UserPage" element={<AdminUserPage/>} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
