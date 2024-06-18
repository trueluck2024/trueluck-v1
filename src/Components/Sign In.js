import React, { useState } from 'react';
import profileicon from '../Images/profile-icon.png';
import '../Styles/Sign In.css';
import SidePopup from '../Components/Side Popup'; // Ensure the import is correct

function Sign_In({ onClose }) {

    const [isClosing, setIsClosing] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [nickname, setNickname] = useState('');

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 500);
    };

    const handleInputChange = (event) => {
        setNickname(event.target.value);
      };

    const handleSignUpClick = () => {
        setShowSignUp(true);
        setIsClosing(true); 
    };
    const handleSignUpClose = () => {
        setShowSignUp(false);
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 500);
    };

    const handleEnterClose =() =>{
        const isNicknameEntered = nickname.trim().length > 0;
        if (isNicknameEntered) {
            setTimeout(() => {
                onClose();
            }, 500);
          } else {
            alert('Please enter a nickname.');
          }
    }

    return (
        <div className='sign-in-container'>
            {!showSignUp && (
                <div className={`signin_modal ${isClosing ? 'closing' : ''}`}>
                    <div className={`signin_modal_container ${isClosing ? 'closing' : ''}`}>
                        <div className='signin_modal_header'>
                            <button className="close-button" onClick={handleClose}>X</button>
                            <img src={profileicon} alt='profile-icon' className='profile-icon'/>
                        </div>
                        <div className="modal_nickname">
                            <label htmlFor="nickname">NAME:</label>
                            <input type="text" id="nickname" name="nickname" value={nickname} onChange={handleInputChange}/>
                        </div>
                        <button className='namebutton' onClick={handleEnterClose} >ENTER</button>
                        <div className='orelement'>
                            <hr className='line1'></hr>
                            <div className='or'>OR</div>
                            <hr className='line2'></hr>
                        </div>
                        <button className="modal_signup" onClick={handleSignUpClick}><span>SIGN UP WITH</span>
                             <svg className='circle-text' xmlns="http://www.w3.org/2000/svg" width="659" height="228" viewBox="0 0 659 228" fill="none"> <g filter="url(#filter0_di_358_74)"> <path d="M85.375 175.75C58.25 175.75 44.95 162.975 44.95 132.7V60.25H62.4499V86.5H85.375V101.9H62.4499V130.25C62.4499 151.775 70.5 159.825 85.375 159.825V175.75Z" fill="url(#paint0_linear_358_74)"/> <path d="M95.7068 174V86.5H113.207V105.225C117.932 92.45 129.832 84.75 144.357 84.75V101.9C131.407 101.9 114.257 109.95 113.207 137.425V174H95.7068Z" fill="url(#paint1_linear_358_74)"/> <path d="M180.978 175.75C163.653 175.75 152.103 162.975 152.103 139.35V86.5H169.603V134.625C169.603 150.025 174.678 159.825 186.753 159.825C197.953 159.825 208.103 149.5 208.103 128.5V86.5H225.603V174H208.103V160.7C201.278 171.025 190.778 175.75 180.978 175.75Z" fill="url(#paint2_linear_358_74)"/> <path d="M234.744 130.25C234.744 102.775 249.794 84.75 272.369 84.75C295.994 84.75 309.994 103.825 309.469 133.575H253.294C254.169 149.5 264.844 159.475 279.719 159.475C290.744 159.475 298.094 155.275 303.344 148.8V167.35C297.044 172.6 287.769 175.75 277.094 175.75C250.844 175.75 234.744 157.9 234.744 130.25ZM253.469 122.725H291.094C289.169 109.425 282.694 101.025 272.194 101.025C262.044 101.025 255.219 109.95 253.469 122.725Z" fill="url(#paint3_linear_358_74)"/> <path d="M347.953 174V42.75H365.453V174H347.953Z" fill="url(#paint4_linear_358_74)"/> <path d="M406.393 175.75C389.068 175.75 377.518 162.975 377.518 139.35V86.5H395.018V134.625C395.018 150.025 400.093 159.825 412.168 159.825C423.368 159.825 433.518 149.5 433.518 128.5V86.5H451.018V174H433.518V160.7C426.693 171.025 416.193 175.75 406.393 175.75Z" fill="url(#paint5_linear_358_74)"/> <path d="M460.159 130.25C460.159 103.475 476.959 84.75 501.459 84.75C511.609 84.75 518.959 88.075 524.384 92.1V111.35C519.309 104.875 512.484 100.85 503.209 100.85C488.684 100.85 478.359 113.625 478.359 130.25C478.359 146.875 488.684 159.65 503.559 159.65C512.659 159.65 519.484 156.325 524.384 149.675V169.1C518.959 173.3 511.784 175.75 501.634 175.75C476.959 175.75 460.159 157.025 460.159 130.25Z" fill="url(#paint6_linear_358_74)"/> <path d="M533.549 174V42.75H551.049V126.225L583.599 86.5H604.599L574.674 122.025L607.049 174H586.924L563.124 135.675L551.049 150.2V174H533.549Z" fill="url(#paint7_linear_358_74)"/> <path d="M85.375 176.872H86.4967V175.75V159.825V158.703H85.375C78.1389 158.703 72.7867 156.753 69.2004 152.396C65.5725 147.99 63.5717 140.911 63.5717 130.25V103.022H85.375H86.4967V101.9V86.5V85.3782H85.375H63.5717V60.25V59.1282H62.4499H44.95H43.8282V60.25V132.7C43.8282 147.974 47.1798 159.08 54.1823 166.356C61.1941 173.642 71.6563 176.872 85.375 176.872ZM94.585 174V175.122H95.7068H113.207H114.329V174V137.447C114.848 123.962 119.303 115.396 125.071 110.192C130.861 104.968 138.099 103.022 144.357 103.022H145.479V101.9V84.75V83.6282H144.357C131.279 83.6282 120.183 89.7142 114.329 100.126V86.5V85.3782H113.207H95.7068H94.585V86.5V174ZM152.103 85.3782H150.981V86.5V139.35C150.981 151.332 153.91 160.714 159.177 167.122C164.467 173.556 172.018 176.872 180.978 176.872C190.195 176.872 199.986 172.839 206.981 164.139V174V175.122H208.103H225.603H226.725V174V86.5V85.3782H225.603H208.103H206.981V86.5V128.5C206.981 138.83 204.485 146.401 200.734 151.361C196.995 156.303 191.981 158.703 186.753 158.703C181.078 158.703 177.158 156.432 174.597 152.399C171.985 148.285 170.725 142.235 170.725 134.625V86.5V85.3782H169.603H152.103ZM309.469 134.697H310.571L310.591 133.595C310.856 118.556 307.454 106.078 300.872 97.3317C294.263 88.5498 284.518 83.6282 272.369 83.6282C260.758 83.6282 251.032 88.2752 244.228 96.4808C237.439 104.667 233.622 116.316 233.622 130.25C233.622 144.289 237.712 155.958 245.251 164.129C252.8 172.311 263.703 176.872 277.094 176.872C287.977 176.872 297.522 173.662 304.062 168.212L304.466 167.875V167.35V148.8V145.635L302.473 148.093C297.433 154.31 290.401 158.353 279.719 158.353C272.539 158.353 266.442 155.951 262.037 151.69C257.857 147.649 255.131 141.869 254.499 134.697H309.469ZM346.831 174V175.122H347.953H365.453H366.575V174V42.75V41.6282H365.453H347.953H346.831V42.75V174ZM377.518 85.3782H376.396V86.5V139.35C376.396 151.332 379.325 160.714 384.592 167.122C389.882 173.556 397.433 176.872 406.393 176.872C415.61 176.872 425.401 172.839 432.396 164.139V174V175.122H433.518H451.018H452.14V174V86.5V85.3782H451.018H433.518H432.396V86.5V128.5C432.396 138.83 429.9 146.401 426.149 151.361C422.41 156.303 417.396 158.703 412.168 158.703C406.493 158.703 402.573 156.432 400.012 152.399C397.4 148.285 396.14 142.235 396.14 134.625V86.5V85.3782H395.018H377.518ZM525.506 92.1V91.5355L525.053 91.1991C519.46 87.0498 511.88 83.6282 501.459 83.6282C488.907 83.6282 478.275 88.4327 470.79 96.7068C463.313 104.972 459.038 116.629 459.038 130.25C459.038 143.871 463.313 155.529 470.813 163.794C478.321 172.069 488.997 176.872 501.634 176.872C511.976 176.872 519.409 174.371 525.071 169.987L525.506 169.65V169.1V149.675V146.261L523.481 149.01C518.812 155.347 512.336 158.528 503.559 158.528C489.477 158.528 479.481 146.444 479.481 130.25C479.481 114.045 489.486 101.972 503.209 101.972C512.098 101.972 518.612 105.804 523.501 112.042L525.506 114.6V111.35V92.1ZM532.427 174V175.122H533.549H551.049H552.17V174V150.605L562.991 137.589L585.971 174.592L586.3 175.122H586.924H607.049H609.069L608.001 173.407L576.057 122.124L605.457 87.2227L607.01 85.3782H604.599H583.599H583.067L582.731 85.789L552.17 123.086V42.75V41.6282H551.049H533.549H532.427V42.75V174ZM289.781 121.603H254.774C256.755 109.77 263.208 102.147 272.194 102.147C277.106 102.147 281.038 104.095 284.002 107.611C286.796 110.924 288.764 115.678 289.781 121.603Z" stroke="#FFE5E5" stroke-width="2.24359"/> </g> <defs> <filter id="filter0_di_358_74" x="0.684881" y="0.122223" width="658.127" height="227.23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="2.85037" dy="4.48718"/> <feGaussianBlur stdDeviation="22.4359"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0.869466 0 0 0 0 0.0525302 0 0 0 0 0.689741 0 0 0 1 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_358_74"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_358_74" result="shape"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="5.70075"/> <feGaussianBlur stdDeviation="8.97868"/> <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/> <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.316667 0 0 0 0 0.445597 0 0 0 1 0"/> <feBlend mode="normal" in2="shape" result="effect2_innerShadow_358_74"/> </filter> <linearGradient id="paint0_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint1_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint2_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint3_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint4_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint5_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint6_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> <linearGradient id="paint7_linear_358_74" x1="324.492" y1="42.9519" x2="324.492" y2="144.128" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD3AE"/> <stop offset="1" stop-color="#DE50F6"/> </linearGradient> </defs> </svg>
                        </button>
                        <div className='info'>SIGN UP WITH TRUE LUCK FOR BENEFITS</div>
                    </div>
                </div>
            )}
            {showSignUp && <SidePopup onClose={handleSignUpClose} />}
        </div>
    );
}

export default Sign_In;
