import React from 'react';
import logo from '../../assets/Emily/portfolio_logo.png';

function Nav (props) {
  const tabs = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img"> <img src={logo} alt="emily"/></span>
        </a>
      </h2>
    <ul className="nav nav-tabs flex-row">
      {tabs.map(tab => (
        <li className="nav-item mx-2" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </header>
  );
}

export default Nav;