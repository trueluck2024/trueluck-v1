import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import CashRegisterAudio from '../Styles/Audio/cash-register-purchase.mp3';
import '../Styles/Room.css';
import up_arrow from '../Images/Up arrow.png'
import down_arrow from '../Images/Down arrow.png'


function Room(props) {
  const [tickets, setTickets] = useState(1);

  const UpButton = () => {
    setTickets(tickets + 1);
  };

  const DownButton = () => {
    if (tickets > 0) {
      setTickets(tickets - 1);
    }
  };

  const onBuyButtonclick = () => {
    const audio = new Audio(CashRegisterAudio);
    audio.play();
    props.onBuyClick();

    // if (props.parentCallback) {
    //   props.parentCallback("Buy was a Success :)");
    // } else {
    //   console.error("parentCallback is not a function");
    // }
  };

  const [isDancing, setIsDancing] = useState(false);

  const handleMouseEnter = () => {
    setIsDancing(true);
  };

  const handleMouseLeave = () => {
    setIsDancing(false);
  };

  const navigate = useNavigate();
  console.log();

  return (
    <div className='room'>
      <div className='room-contents'>
        <p className='room-price'>{props.roomName}</p>
        <div className='entree-fee-container'>
          <p className='entree-fee'>ENTREE FEE:</p> 
          <svg className='usdt' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 45 45" > <path fill="#26A69A" d="M22.5 41.25c10.355 0 18.75-8.395 18.75-18.75S32.855 3.75 22.5 3.75 3.75 12.145 3.75 22.5s8.395 18.75 18.75 18.75z" ></path> <path fill="#fff" d="M30.938 12.188H14.063v4.687h16.874v-4.688zM22.5 19.688c-4.178 0-11.25.69-11.25 3.28 0 2.591 7.072 3.282 11.25 3.282s11.25-.69 11.25-3.281c0-2.59-7.072-3.282-11.25-3.282zm0 4.687c-5.178 0-9.375-.84-9.375-1.875 0-1.036 4.197-1.875 9.375-1.875s9.375.84 9.375 1.875c0 1.036-4.197 1.875-9.375 1.875z" ></path> <path fill="#fff" d="M22.5 22.5c1.027 0 1.962-.035 2.813-.092v-10.22h-5.625v10.22c.85.057 1.785.092 2.812.092zM24.115 24.345l-.315.01c-.426.012-.858.02-1.3.02a48.85 48.85 0 01-2.813-.085v9.46h5.625v-9.461c-.388.024-.789.042-1.197.056z" ></path> </svg>
          <p className='entree-fee'>{props.entryFee}</p>
        </div>
        <div className='text-container'>
          <p className='participants'>Participants:{props.participants}</p>
          <p className='tickets-remaining'>tickets remaining: {props.ticketsRemaining}/10</p>
          <p className='total-prizes'>total prizes: {props.totalPrizes}</p>


        </div>
        <div className='first-prize-container'>
          <p className='first-prize'>1st prize: </p>
          <svg className='usdt' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" viewBox="0 0 45 45" > <path fill="#26A69A" d="M22.5 41.25c10.355 0 18.75-8.395 18.75-18.75S32.855 3.75 22.5 3.75 3.75 12.145 3.75 22.5s8.395 18.75 18.75 18.75z" ></path> <path fill="#fff" d="M30.938 12.188H14.063v4.687h16.874v-4.688zM22.5 19.688c-4.178 0-11.25.69-11.25 3.28 0 2.591 7.072 3.282 11.25 3.282s11.25-.69 11.25-3.281c0-2.59-7.072-3.282-11.25-3.282zm0 4.687c-5.178 0-9.375-.84-9.375-1.875 0-1.036 4.197-1.875 9.375-1.875s9.375.84 9.375 1.875c0 1.036-4.197 1.875-9.375 1.875z" ></path> <path fill="#fff" d="M22.5 22.5c1.027 0 1.962-.035 2.813-.092v-10.22h-5.625v10.22c.85.057 1.785.092 2.812.092zM24.115 24.345l-.315.01c-.426.012-.858.02-1.3.02a48.85 48.85 0 01-2.813-.085v9.46h5.625v-9.461c-.388.024-.789.042-1.197.056z" ></path> </svg>
          <p className='first-prize'>{props.onePrize} USDT</p>
        </div>
        {props.isEnded ? (<p className='ended-room'>Room Ended :( </p>) : null}
        {props.isWon ? (
          <p className="won-room" onClick={() => { navigate("/Room"); }} >
            You Won{' '}
            <span
              className={`dancing-emoji ${isDancing ? 'dance' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              ヽ(o＾▽＾o)ノ
            </span>
          </p>
        ) : null}
        {props.isLive ? (
          <div className='buying-section'>
            <div className='counter'>
              <img src={up_arrow} onClick={UpButton} alt="Up Arrow" />
              <p className='counter-number'>{tickets}</p>
              <img src={down_arrow} onClick={DownButton} alt="Down Arrow" />
            </div>
            <button className='buy-container' onClick={onBuyButtonclick}>
              <p className='buy-text'>BUY</p>
            </button>
            <div onClick={() => { navigate("/Room"); }} className='view-text'>VIEW</div>

          </div>
        ) : null}

        {props.isEdit ? (

          <div className='buying-section'>
            <button className='refund-container' >
              <p className='refund-text'>REFUND</p>
            </button>
            <div onClick={() => { navigate("/Room"); }} className='view-text'>VIEW</div>
            {props.isEdit ? (<div onClick={() => { navigate("/CreateRoom"); }} className='view-text'>EDIT</div>) : null}

          </div>
        ) : null

        }
      </div>
    </div>
  );
}

export default Room;