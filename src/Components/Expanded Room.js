import React, { useState, useEffect } from 'react';
import '../Styles/Expanded Room.css';
import expanded_room_bg from '../Images/Expanded-room-bg.png'
import up_arrow from '../Images/Up arrow.png'
import down_arrow from '../Images/Down arrow.png'
import profile from '../Images/profile-pic.png'
import CashRegisterAudio from '../Styles/Audio/cash-register-purchase.mp3';
import Notification from "./Notification";

function Expanded_Room(props){

    const [tickets, setTickets] = useState(0);
    const [showNotification, setShowNotification] = useState(false);
    const [isWinner, setIsWinner] = useState(true);

    const UpButton = () => {
        setTickets(tickets+1);
      };
      const DownButton = () => {
        if (tickets > 0){
          setTickets(tickets-1);
        }
      };

    const OnBuyButtonclick = () => {
        const audio = new Audio(CashRegisterAudio);
        audio.play();
        setShowNotification(true)
        setTimeout(() => {
            setShowNotification(false);
        }, 4000);
      };

      const generateConfetti = () => {
        const confettiColors = ['#F7A64C', '#FFD700', '#FF4500', '#ADFF2F', '#00CED1', '#FF69B4'];
        const confettiArray = [];
      
        for (let i = 0; i < 50; i++) {
          const confettiStyle = {
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            '--confetti-color': confettiColors[Math.floor(Math.random() * confettiColors.length)]
          };
      
          confettiArray.push(
            <div className="confetti" style={confettiStyle} key={i} />
          );
        }
      
        return confettiArray;
      };
    return (
        <div className='Expanded-Room'>
            <div className='left-container'>
                <div className='title'>$100 Room</div>
                <div className='tickets-container'>
                    <div className='tickets-owned-container'>
                        <div className='tickets-owned'>TICKETS OWNED</div>
                        <div className='tickets-number'>5</div>
                    </div>
                    <div className='winning-chance-container'>
                        <div className='winning-chance'>Winning Chance</div>
                        <div className='winning-percentage'>50%</div>
                    </div>
                </div>
                <div className='total-prizes'>Total Prizes : 3</div>
                <div className='prize-list'>
                <div className='first-prize'>1st : <span>$60 USDT/USDC</span></div>
                <div className='second-prize'>2nd : <span>$60 USDT/USDC</span></div>
                <div className='third-prize'>3rd : <span>$60 USDT/USDC</span></div>
                <div className='first-prize'>1st : <span>$60 USDT/USDC</span></div>
                <div className='second-prize'>2nd : <span>$60 USDT/USDC</span></div>
                <div className='third-prize'>3rd : <span>$60 USDT/USDC</span></div>
                
                </div>
            </div>
            <div className='right-container'>
                <div className='entry-fee'>Entry fee : $10 usdt/usdc</div>
                {isWinner ? (  <>
                <div  className='winner'>WINNERS</div>
                <div className='winner-panel'>
                    <div  className='winner-1'>1ST :  <img src={profile}/> CRACKHEAD47  </div>
                    <div  className='winner-2'>2ND :  <img src={profile}/> CRACKHEAD47  </div>
                    <div  className='winner-3'>3RD :  <img src={profile}/> CRACKHEAD47  </div>
                    <div  className='winner-1'>1ST :  <img src={profile}/> CRACKHEAD47  </div>
                    <div  className='winner-2'>2ND :  <img src={profile}/> CRACKHEAD47  </div>
                    <div  className='winner-3'>3RD :  <img src={profile}/> CRACKHEAD47  </div>
                </div>
                <button className='claim-container' onClick={OnBuyButtonclick}>
                        <p className='claim-text'>CLAIM</p>
                    </button>
                    </>) : (  <>
                <div className='participants'>Participants : 6</div>
                <div className='tickets-remaining'>Ticket remaining : 2</div>
                <div className='buying-section'>
                    <div className='counter'>
                        <img src={up_arrow} onClick={UpButton}/>
                        <p className='counter-number'>{tickets}</p>
                        <img src={down_arrow} onClick={DownButton}/>       
                    </div>
                    <button className='buy-container' onClick={OnBuyButtonclick}>
                        <p className='buy-text'>BUY</p>
                    </button>
                </div>
                </>)}
                  
            </div>
            {/* {generateConfetti()} */}
            {showNotification && <Notification text="A new room has been bought"/>}
        </div>
    )
}

export default Expanded_Room;