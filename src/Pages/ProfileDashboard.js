import React, { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';
import '../Styles/Room.css';
import jsonData from '../Data.json';
import Navbar from '../Components/Navbar.js';
import Profile_Details from '../Components/Profile Details.js';
import Profile_Options from '../Components/Profile Options.js';
import Rooms_Entered from '../Components/Rooms Entered.js';
import Tx_History from '../Components/Tx History.js';
import Analytics from '../Components/Analytics.js';
import Referrals from '../Components/Referrals.js';
import SignIn from '../Components/Sign In';




function ProfileDashboard() {
  const [activeItem, setActiveItem] = useState('ROOMS ENTERED');
  const [signIn,setSignIn] = useState(true);

  const handleItemClick = (item) => {
      setActiveItem(item);
  };

  useEffect(() => {
    console.log("SignIn state:", signIn);
  }, [signIn]);
 
    return (
      <div className="Profile-Dashboard">
      <Navbar {...jsonData.Navbar}/>
      <Profile_Details/>
      <Profile_Options activeItem={activeItem} handleItemClick={handleItemClick}/>
      {activeItem === 'ROOMS ENTERED' && <Rooms_Entered {...jsonData.Rooms} />}
      {activeItem === 'TX HISTORY' && <Tx_History {...jsonData.Statistics_Overview} />}
      {activeItem === 'ANALYTICS' && <Analytics {...jsonData.Statistics_Overview} />}
      {activeItem === 'REFERRALS' && <Referrals {...jsonData.Statistics_Overview} />}
      {signIn && <SignIn onClose={() => setSignIn(false)} />}
    </div>
    );
  }
  
  export default ProfileDashboard;