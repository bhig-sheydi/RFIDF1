import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/LOGO 1.png';
import './nav.css';

const Nav = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="nav">
      <div className="div1">
        <img src={logo} alt="Logo" />
      </div>

      <ul  style={{display : visible && "none" , height : visible && "100px"} }>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Donate</Link>
        </li>
      </ul>

      <div className="divName">
        <FontAwesomeIcon icon={faBars} className="navi" onClick={toggleVisibility} />
        <button className="button2">DONATE</button>
        <button className="button1">
          <FontAwesomeIcon icon={faSearch}  className='searchi'/>
        </button>
      </div>
    </div>
  );
};

export default Nav;
