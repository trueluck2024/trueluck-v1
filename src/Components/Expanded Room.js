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

      const OnclaimButtonclick = () => {
        const audio = new Audio(CashRegisterAudio);
        audio.play();
        setShowNotification(true)
        setIsWinner(false)
        setTimeout(() => {
            setShowNotification(false);
        }, 4000);
      };

      const OnBuyButtonclick = () => {
        const audio = new Audio(CashRegisterAudio);
        audio.play();
        setShowNotification(true)
        setIsWinner(true)
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
                <div className='first-prize'>1st : <span>
                <svg className='usdt' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 45 45" > <path fill="#26A69A" d="M22.5 41.25c10.355 0 18.75-8.395 18.75-18.75S32.855 3.75 22.5 3.75 3.75 12.145 3.75 22.5s8.395 18.75 18.75 18.75z" ></path> <path fill="#fff" d="M30.938 12.188H14.063v4.687h16.874v-4.688zM22.5 19.688c-4.178 0-11.25.69-11.25 3.28 0 2.591 7.072 3.282 11.25 3.282s11.25-.69 11.25-3.281c0-2.59-7.072-3.282-11.25-3.282zm0 4.687c-5.178 0-9.375-.84-9.375-1.875 0-1.036 4.197-1.875 9.375-1.875s9.375.84 9.375 1.875c0 1.036-4.197 1.875-9.375 1.875z" ></path> <path fill="#fff" d="M22.5 22.5c1.027 0 1.962-.035 2.813-.092v-10.22h-5.625v10.22c.85.057 1.785.092 2.812.092zM24.115 24.345l-.315.01c-.426.012-.858.02-1.3.02a48.85 48.85 0 01-2.813-.085v9.46h5.625v-9.461c-.388.024-.789.042-1.197.056z" ></path> </svg>
                60 USDT</span></div>
                <div className='first-prize'>2nd : <span>
                <svg className='usdt' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 45 45" > <path fill="#26A69A" d="M22.5 41.25c10.355 0 18.75-8.395 18.75-18.75S32.855 3.75 22.5 3.75 3.75 12.145 3.75 22.5s8.395 18.75 18.75 18.75z" ></path> <path fill="#fff" d="M30.938 12.188H14.063v4.687h16.874v-4.688zM22.5 19.688c-4.178 0-11.25.69-11.25 3.28 0 2.591 7.072 3.282 11.25 3.282s11.25-.69 11.25-3.281c0-2.59-7.072-3.282-11.25-3.282zm0 4.687c-5.178 0-9.375-.84-9.375-1.875 0-1.036 4.197-1.875 9.375-1.875s9.375.84 9.375 1.875c0 1.036-4.197 1.875-9.375 1.875z" ></path> <path fill="#fff" d="M22.5 22.5c1.027 0 1.962-.035 2.813-.092v-10.22h-5.625v10.22c.85.057 1.785.092 2.812.092zM24.115 24.345l-.315.01c-.426.012-.858.02-1.3.02a48.85 48.85 0 01-2.813-.085v9.46h5.625v-9.461c-.388.024-.789.042-1.197.056z" ></path> </svg>
                60 USDT</span></div>
                <div className='first-prize'>3rd : <span>
                <svg className='usdt' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 45 45" > <path fill="#26A69A" d="M22.5 41.25c10.355 0 18.75-8.395 18.75-18.75S32.855 3.75 22.5 3.75 3.75 12.145 3.75 22.5s8.395 18.75 18.75 18.75z" ></path> <path fill="#fff" d="M30.938 12.188H14.063v4.687h16.874v-4.688zM22.5 19.688c-4.178 0-11.25.69-11.25 3.28 0 2.591 7.072 3.282 11.25 3.282s11.25-.69 11.25-3.281c0-2.59-7.072-3.282-11.25-3.282zm0 4.687c-5.178 0-9.375-.84-9.375-1.875 0-1.036 4.197-1.875 9.375-1.875s9.375.84 9.375 1.875c0 1.036-4.197 1.875-9.375 1.875z" ></path> <path fill="#fff" d="M22.5 22.5c1.027 0 1.962-.035 2.813-.092v-10.22h-5.625v10.22c.85.057 1.785.092 2.812.092zM24.115 24.345l-.315.01c-.426.012-.858.02-1.3.02a48.85 48.85 0 01-2.813-.085v9.46h5.625v-9.461c-.388.024-.789.042-1.197.056z" ></path> </svg>
                60 USDT</span></div>
                <div className='first-prize'>4th : <span>
                <svg className='usdt' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 45 45" > <path fill="#26A69A" d="M22.5 41.25c10.355 0 18.75-8.395 18.75-18.75S32.855 3.75 22.5 3.75 3.75 12.145 3.75 22.5s8.395 18.75 18.75 18.75z" ></path> <path fill="#fff" d="M30.938 12.188H14.063v4.687h16.874v-4.688zM22.5 19.688c-4.178 0-11.25.69-11.25 3.28 0 2.591 7.072 3.282 11.25 3.282s11.25-.69 11.25-3.281c0-2.59-7.072-3.282-11.25-3.282zm0 4.687c-5.178 0-9.375-.84-9.375-1.875 0-1.036 4.197-1.875 9.375-1.875s9.375.84 9.375 1.875c0 1.036-4.197 1.875-9.375 1.875z" ></path> <path fill="#fff" d="M22.5 22.5c1.027 0 1.962-.035 2.813-.092v-10.22h-5.625v10.22c.85.057 1.785.092 2.812.092zM24.115 24.345l-.315.01c-.426.012-.858.02-1.3.02a48.85 48.85 0 01-2.813-.085v9.46h5.625v-9.461c-.388.024-.789.042-1.197.056z" ></path> </svg>
                60 USDT</span></div>
                <div className='first-prize'>5th : <span>
                <svg className='usdt' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 45 45" > <path fill="#26A69A" d="M22.5 41.25c10.355 0 18.75-8.395 18.75-18.75S32.855 3.75 22.5 3.75 3.75 12.145 3.75 22.5s8.395 18.75 18.75 18.75z" ></path> <path fill="#fff" d="M30.938 12.188H14.063v4.687h16.874v-4.688zM22.5 19.688c-4.178 0-11.25.69-11.25 3.28 0 2.591 7.072 3.282 11.25 3.282s11.25-.69 11.25-3.281c0-2.59-7.072-3.282-11.25-3.282zm0 4.687c-5.178 0-9.375-.84-9.375-1.875 0-1.036 4.197-1.875 9.375-1.875s9.375.84 9.375 1.875c0 1.036-4.197 1.875-9.375 1.875z" ></path> <path fill="#fff" d="M22.5 22.5c1.027 0 1.962-.035 2.813-.092v-10.22h-5.625v10.22c.85.057 1.785.092 2.812.092zM24.115 24.345l-.315.01c-.426.012-.858.02-1.3.02a48.85 48.85 0 01-2.813-.085v9.46h5.625v-9.461c-.388.024-.789.042-1.197.056z" ></path> </svg>
                60 USDT</span></div>
                
                </div>
            </div>
            <div className='right-container'>
              <div className='entry-fee-container'>
                <div className='entry-fee'>Entry fee :</div> 
                <svg className='usdt' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 45 45" > <path fill="#26A69A" d="M22.5 41.25c10.355 0 18.75-8.395 18.75-18.75S32.855 3.75 22.5 3.75 3.75 12.145 3.75 22.5s8.395 18.75 18.75 18.75z" ></path> <path fill="#fff" d="M30.938 12.188H14.063v4.687h16.874v-4.688zM22.5 19.688c-4.178 0-11.25.69-11.25 3.28 0 2.591 7.072 3.282 11.25 3.282s11.25-.69 11.25-3.281c0-2.59-7.072-3.282-11.25-3.282zm0 4.687c-5.178 0-9.375-.84-9.375-1.875 0-1.036 4.197-1.875 9.375-1.875s9.375.84 9.375 1.875c0 1.036-4.197 1.875-9.375 1.875z" ></path> <path fill="#fff" d="M22.5 22.5c1.027 0 1.962-.035 2.813-.092v-10.22h-5.625v10.22c.85.057 1.785.092 2.812.092zM24.115 24.345l-.315.01c-.426.012-.858.02-1.3.02a48.85 48.85 0 01-2.813-.085v9.46h5.625v-9.461c-.388.024-.789.042-1.197.056z" ></path> </svg>
                <div className='entry-fee'>10 usdt</div>
              </div>
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
                <button className='claim-container' onClick={OnclaimButtonclick}>
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