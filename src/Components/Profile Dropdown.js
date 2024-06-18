import React, { useState } from 'react';
import '../Styles/Profile Dropdown.css';
import { useNavigate } from "react-router-dom";
import profileicon from '../Images/profile-icon.png';




function Profile_Dropdown({onProfileClick}) {

    const navigate = useNavigate();

  return (
    <div className="Profile-Dropdown" onClick={() => { navigate("/ProfileDashboard"); }} >
        <img src={profileicon} alt='profile-icon' className='profile-icon'  />
        <div class="menu-dropdown-wrapper">
            <div className="menu-dropdown">
                <div className='option'> <span>Rooms Live:5</span></div>
                <div className='option'> <span>Rooms Ended:4</span></div>
                <div className='option'> <span>Rooms Won:1</span></div>
                <div className='option' onClick={() => { navigate("/ProfileDashboard"); }}>
                  <span>Dashboard </span>
                  <svg className='dashboard-svg' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25" height="25" fill="none" viewBox="0 0 25 25" > <mask id="mask0_1_1838" style={{ maskType: "alpha" }} width="25" height="26" x="0" y="0" maskUnits="userSpaceOnUse" > <path fill="url(#pattern0_1_1838)" d="M0 0H25V25H0z"></path> </mask> <g mask="url(#mask0_1_1838)"> <path fill="url(#paint0_linear_1_1838)" d="M1.5 4.75H23V20.5H1.5z" ></path> </g> <defs> <pattern id="pattern0_1_1838" width="1" height="1" patternContentUnits="objectBoundingBox" > <use transform="scale(.01)" xlinkHref="#image0_1_1838"></use> </pattern> <linearGradient id="paint0_linear_1_1838" x1="23" x2="1.739" y1="11.625" y2="9.372" gradientUnits="userSpaceOnUse" > <stop stopColor="#8A00BE"></stop> <stop offset="1" stopColor="#FEBB3B"></stop> </linearGradient> <image id="image0_1_1838" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+klEQVR4nO3cvWoUURiA4SUgBJtYRYiFRWy1j6UBMQG7pDOd92Cb0tZS7LwAvQFtYmehtVVCEvJnFVAslLxhyC4sMvnZnTnnfMO8T7nF7jm8zOzut7MzGEiSJEmSJEmSJEmSJEkaAp4Dh8ABsDF6XIVwEWLcO2DWIOWC1PkOPDBKnCCVU2DdKHGCVM6AN8Atw8QIMvIVuG+UOEEqP4GnRokTZHQKew3MGCZGkJHPwF2jxAlS2QMeGyVOkMpf4JVRWkQ7PgJ32lxXb9GeH8Cj0vvpPNr1B3hZek+dRhrvgdul99ZJpOOAMliQigPKYEHKDSiB1eGXJdX7AtzLGcQY1zsGlnMFUaQB5Q0Xo1wDyrEXUoQB5QSLUI4B5X8votIDyikWoJQDypon13R+AysGiWXHILFsGySOX8Azg8R5U3/om3oMH4C5VmL4KasRvxgGsgsstXZUeIQ08gmYH6TSbG298g/YzDF+9weq6x0BT5KGGAuyMjwnqt4WsJAlRpeRnv/CmkSGy4DWJlpQ35HON2Cx9P46hzS8lHRaLYfwYuumQg4G+4yIg8E+oxn/0hYoyG6ywWCfEXEw2GdEHAz2GTd34q014gTZcjCYCVdzMJgbl3MwWAL1HAwGugnmW2+CWf42sTvAPvCi5FokSZIkSZIkSZIkSZKkQVLnOXg9OT5CUCAAAAAASUVORK5CYII=" ></image> </defs> </svg>
                </div>
                <div className='option'>
                  <span>Logout </span>
                  <svg className='dashboard-svg' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="22" height="22" fill="none" viewBox="0 0 18 18" > <mask id="mask0_1_1846" style={{ maskType: "alpha" }} width="18" height="18" x="0" y="0" maskUnits="userSpaceOnUse" > <path fill="url(#pattern0_1_1846)" d="M0.889 0.889H17.556V17.556H0.889z" ></path> </mask> <g mask="url(#mask0_1_1846)"> <path fill="red" d="M-1 -1H19V18H-1z"></path> </g> <defs> <pattern id="pattern0_1_1846" width="1" height="1" patternContentUnits="objectBoundingBox" > <use transform="scale(.01042)" xlinkHref="#image0_1_1846"></use> </pattern> <image id="image0_1_1846" width="96" height="96" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACy0lEQVR4nO3dy04UQRTG8bMCE5moS018GJC3IPHyAqy8xhDewHkRL4kXdOEedeFScOnsZ9QMa/6mYi8M6WpChO5zTn+/hIQN6arzDdVVPTU1ZiIiIiIiIiIiImcEXAPuAa+AQ+AIf46atpU23gWuhg8auAQ8Bn4Rz0/gUemDRQTcAD4T31fgpgUs/ow8ZqVPFmjY+UI+n4BV8w54Ql4PLMBsp+uG+wZYBy6bM8AasAG862j/wvXsqJm+1Ty1IICdjn7cMa+aOXTrK9+Cof6f8MK8Ar5XGr1uwQC3Kn05MK+AZaXRaxYMMKn0ZWleVRqMBQXMW7ozN68SBjBt6c7UvEoYwArwrJl+LprfV8yrbAGEowAGpgAGpgAGpgAGli0ANAtyuQ7Yc/u+wEhWwn5DoMLyBeAzBCos1xDkNwQqLChgtSlyjBCyBfDPTOj1KSF8cLF/KGMAoULIGkCYEDIHECKE7AG4D2EMAbgOYSwBuA1hTAG4DOF/Azjx9DGTfhZrtauf49I/sovfTVG78jk9/Iru4vcT1a58hr9XAAMHoCFo4AB0Ex4ygGjINg2NBG/FH1MAeCz+WALAa/HHEACei589ALwXP3MARCh+yI/0ZCp+yI/0JNyWEusjPdk2ZmVDtK2J2RBtc242RNueng3J7mnSB2AL+Nj8bPVyUfkL2G4ZM7dVn55UDuqb9XX90QOOWwI4Hn1h+lJbsVhQRJsFJQxgGurZVsIA5qGe7nYcWTaxYIArlb78toCH9m1YMMBmpS+H5hXwstLotxYM8L7Sl+cW9ODWHQsC2O3ox21zfnRxOXe/Zq85j3Pi9JjKzY5Xvv+ji4vmSw+yum9B3kctR71nsx/mfYCEX+DwA7hukZQGJ/lP2A9X/BPD0cNTbsxeLcqYH2bY6VJmDuXc/WadcNCxYh7SEvhWjqcvU033sx0REREREREREbFM/gCxUwDQt/RFAwAAAABJRU5ErkJggg==" ></image> </defs> </svg>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Profile_Dropdown;