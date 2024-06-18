import React, { useState } from 'react';
import '../Styles/Rooms Entered.css';
import Room from './Room';
import Notification from "./Notification";

const Rooms_Entered = (props) => {
  const [isLive, setIsLive] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [isWon, setIsWon] = useState(false);

  const handleLiveClick = () => {
    setIsLive(true);
    setIsEnded(false);
    setIsWon(false);
  };

  const handleEndedClick = () => {
    setIsLive(false);
    setIsEnded(true);
    setIsWon(false);
  };

  const handleWonClick = () => {
    setIsLive(false);
    setIsEnded(false);
    setIsWon(true);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [showNotification, setShowNotification] = useState(false);

  const handleNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  return (
    <div className="Rooms-Entered">
      <div className='Room-Stats'>
        <div className="live"onClick={handleLiveClick}>Live : 3</div>
        <div className="ended" onClick={handleEndedClick}>Ended : 4</div>
        <div className="won" onClick={handleWonClick}>Won : 6</div>
      </div>
      <div className='rooms-container'>
        <div className='room-container'><Room {...props} isLive={isLive} isEnded={isEnded} isWon={isWon} onBuyClick={handleNotification} /></div>
        <div className='room-container'><Room {...props} isLive={isLive} isEnded={isEnded} isWon={isWon} onBuyClick={handleNotification} /></div>
        <div className='room-container'><Room {...props} isLive={isLive} isEnded={isEnded} isWon={isWon} onBuyClick={handleNotification} /></div>
        <div className='room-container'><Room {...props} isLive={isLive} isEnded={isEnded} isWon={isWon} onBuyClick={handleNotification} /></div>
        <div className='room-container'><Room {...props} isLive={isLive} isEnded={isEnded} isWon={isWon} onBuyClick={handleNotification} /></div>
        <div className='room-container'><Room {...props} isLive={isLive} isEnded={isEnded} isWon={isWon} onBuyClick={handleNotification} /></div>
        <div className='room-container'><Room {...props} isLive={isLive} isEnded={isEnded} isWon={isWon} onBuyClick={handleNotification} /></div>
        <div className='room-container'><Room {...props} isLive={isLive} isEnded={isEnded} isWon={isWon} onBuyClick={handleNotification} /></div>
      </div>
      {showNotification && <Notification text="A new room has been bought" />}
    </div>
  );
};

export default Rooms_Entered;