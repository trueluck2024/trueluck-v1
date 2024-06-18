import '../Styles/Expanded Room Page.css'
import jsonData from '../Data.json';
import Navbar from '../Components/Navbar.js';
import Expanded_Room from '../Components/Expanded Room.js';
import Participants from '../Components/Participants.js';

function ExpandedRoomPage() {
  return (
    <div className="Expanded-Room-Page">
      <Navbar {...jsonData.Navbar}/>
      <div className='Expanded-Room-Container'>
        <Expanded_Room {...jsonData.Rooms}/>
      </div>
      <Participants/>
    </div>
  );
}

export default ExpandedRoomPage;
