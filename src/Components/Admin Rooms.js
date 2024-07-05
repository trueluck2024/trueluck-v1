import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Styles/Admin Rooms.css';
import Room from './Room';
import Notification from './Notification';

function Admin_Rooms(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1300, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState('');
  const [showAllRooms, setShowAllRooms] = useState(false);

  const handleNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 4000);
  };

  const handleCallback = (childData) => {
    console.log('this is childData' + childData);
    setNotificationText(childData);
  };

  const toggleRooms = () => {
    setShowAllRooms(!showAllRooms);
  };

  return (
    <div className='Admin-rooms'>
      <div className='rooms-available-text'>Rooms Available - 15</div>
      <div className='carousel-container'>
        <Carousel
          infinite={true}
          responsive={responsive}
          className='carousel'
        >
          {[...Array(8)].map((_, index) => (
            <div className='rooms' key={index}>
              <Room {...props} isLive={false} isEnded={false} isWon={false} isEdit={true} onBuyClick={handleNotification} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className='rooms-container'>
        {[...Array(showAllRooms ? 8 : 3)].map((_, index) => (
            <div className='rooms' key={index}>
              <Room {...props }  isLive={false} isEnded={false} isWon={false} isEdit={true} onBuyClick={handleNotification} />
            </div>
          ))}
          <div onClick={toggleRooms} className='toggle-rooms-button'>
            {showAllRooms ? 'View Less' : 'View More'}
          </div>
      </div>
      {showNotification && <Notification text='A new room has been bought' />}
    </div>
  );
}

export default Admin_Rooms;
