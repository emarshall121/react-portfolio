import React from 'react';
import logo from '../../assets/Emily/portfolio_logo.png';

function Nav() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="camera"> <img src={logo} alt="emily"/></span>
       </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <a href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a href='#contact-form'>
              Contact Me
            </a>
          </li>
          <li className="mx-2">
            <a href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;