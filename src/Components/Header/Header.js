import React from 'react';
import '../Header/Header.css'
import image from '../Header/img (5).png'
const Header = () => {
    return (
       <header>
           <div className="text">
           <h1>Subree News</h1>
           <p>Best News Here</p>
           </div>
           <img src={image} alt="" style={{height : '120px'}}/>
       </header>
    );
};

export default Header;