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
        <p className='entree-fee'>ENTREE FEE: {props.entryFee}</p>
        <div className='text-container'>
          <p className='participants'>Participants:{props.participants}</p>
          <p className='tickets-remaining'>tickets remaining: {props.ticketsRemaining}/10</p>
          <p className='total-prizes'>total prizes: {props.totalPrizes}</p>
        </div>
        <p className='first-prize'>1st prize: {props.onePrize}</p>
        {props.isEnded ? (<p className='ended-room'>Room Ended :( </p>) : null}
        {props.isWon ? (
          <p className="won-room">
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
      </div>
    </div>
  );
}

export default Room;